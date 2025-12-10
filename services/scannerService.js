import axios from "axios";

export default async function sendScanToMicroservice(url, type) {
  try {
    const response = await axios.post(
      process.env.SCANNER_URL,
      { url, type }
    );
    return response.data;
  } catch (err) {
    return { error: "Scanner service unavailable" };
  }
}
