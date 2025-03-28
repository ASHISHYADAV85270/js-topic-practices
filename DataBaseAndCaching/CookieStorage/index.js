const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index_cookieStorage.html"));
});

app.get("/logout", (req, res) => {
  res.setHeader("Clear-Site-Data", '"cache", "cookies", "storage"');
  res.redirect("/");
});

app.post("/setPreferences", (req, res) => {
  res.cookie("preferences", req.body.preferences);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
