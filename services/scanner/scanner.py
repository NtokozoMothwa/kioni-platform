import subprocess
import json
import uuid
import os
from supabase import create_client
from dotenv import load_dotenv
import redis
import time

load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_ROLE")
REDIS_URL = os.getenv("REDIS_URL")

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)
redis_client = redis.from_url(REDIS_URL)

QUEUE_NAME = "scan_jobs"


def run_nmap(target):
    """Runs a basic Nmap scan"""
    cmd = ["nmap", "-sV", "-T4", "-oX", "-", target]
    result = subprocess.run(cmd, capture_output=True, text=True)
    return result.stdout


def process_job(job):
    job_data = json.loads(job["data"])
    scan_id = job_data["scan_id"]
    target = job_data["target"]

    print(f"Running scan for {target}")

    xml_output = run_nmap(target)

    # Store raw XML output
    file_name = f"{scan_id}.xml"
    file_path = f"/tmp/{file_name}"
    with open(file_path, "w") as f:
        f.write(xml_output)

    supabase.storage.from_("raw_scans").upload(file_name, file_path)

    supabase.table("scans").update({
        "status": "completed",
        "raw_output_url": file_name
    }).eq("id", scan_id).execute()

    print(f"Scan complete: {scan_id}")


def worker_loop():
    print("Scanner worker started...")

    while True:
        job = redis_client.xread({QUEUE_NAME: "$"}, count=1, block=0)
        if job:
            stream, messages = job[0]
            for msg_id, msg_data in messages:
                process_job(msg_data)
                redis_client.xdel(QUEUE_NAME, msg_id)
        time.sleep(1)


if __name__ == "__main__":
    worker_loop()
