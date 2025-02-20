import express from "express";
import path from "path";
const app = express();
const __dirname = path.resolve(path.dirname(""));
let data = "I am Initial Data";
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/getData", (req, res) => {
  res.json({ data });
});
app.get("/updateData", (req, res) => {
  data = req.query.data || "I am updated Data";
  res.json({ data });
});
app.listen(3000, () => {
  console.log("listening at port 3000");
});
