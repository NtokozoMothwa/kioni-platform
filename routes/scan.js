import express from "express";
import auth from "../middleware/auth.js";
import subscription from "../middleware/subscription.js";
import sendScanToMicroservice from "../services/scannerService.js";

const router = express.Router();

router.post("/basic", auth, async (req, res) => {
  const { url } = req.body;
  const result = await sendScanToMicroservice(url, "basic");
  res.json(result);
});

router.post("/deep-scan", auth, subscription, async (req, res) => {
  const { url } = req.body;
  const result = await sendScanToMicroservice(url, "deep");
  res.json(result);
});

export default router;
