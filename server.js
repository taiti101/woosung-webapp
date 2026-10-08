
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express! Running under PM2.");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.get("/version", (req, res) => {
  res.send(`App version: ${process.env.APP_VERSION || "unset"}`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
