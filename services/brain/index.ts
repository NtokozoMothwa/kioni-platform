import { createClient } from "@supabase/supabase-js";
import Redis from "ioredis";
import OpenAI from "openai";

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE!);
const redis = new Redis(process.env.REDIS_URL!);
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const QUEUE = "brain_jobs";

async function processJob(job: any) {
  const { scan_id, raw_output_url } = job;

  const { data: raw } = await supabase.storage.from("raw_scans").download(raw_output_url);

  const text = await raw.text();

  const summary = await openai.chat.completions.create({
    model: "gpt-4.1",
    messages: [
      { role: "system", content: "You are KIONI — an AI Cyber Analyst." },
      { role: "user", content: `Analyze this scan and produce a summary with prioritized remediation:\n\n${text}` }
    ]
  });

  await supabase.table("ai_summaries").insert({
    id: crypto.randomUUID(),
    scan_id,
    summary: summary.choices[0].message?.content
  });

  console.log("AI summary complete for scan:", scan_id);
}

async function loop() {
  console.log("KIONI Brain worker started...");

  while (true) {
    const job = await redis.xread({ key: QUEUE, id: "$" });
    if (job) {
      const [stream, messages] = job[0];
      for (const [msgId, msg] of messages) {
        await processJob(msg);
        await redis.xdel(QUEUE, msgId);
      }
    }
  }
}

loop();
