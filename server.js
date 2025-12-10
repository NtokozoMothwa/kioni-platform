import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import scanRoute from "./routes/scan.js";
import authRoute from "./routes/auth.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/scan", scanRoute);

app.get("/", (req, res) => {
  res.send("KIONI API Gateway Running");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`🚀 Gateway running on ${port}`));
