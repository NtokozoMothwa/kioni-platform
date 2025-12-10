import express from "express";

const router = express.Router();

router.get("/status", (req, res) => {
  res.json({ message: "Auth route active" });
});

export default router;
