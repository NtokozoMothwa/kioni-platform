export default function subscription(req, res, next) {
  const plan = req.user.user_metadata?.plan || "free";

  if (plan === "free" && req.path === "/deep-scan") {
    return res.status(403).json({
      error: "Upgrade required for deep scans"
    });
  }

  next();
}
