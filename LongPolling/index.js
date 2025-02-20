import express from "express";
import path from "path";
const app = express();
const __dirname = path.resolve(path.dirname(""));
let data = "I am Initial Data";
let waitingClient = [];
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/getData", (req, res) => {
    if (data !== req.query.lastData) {
      res.json({ data });
    } else {
      waitingClient.push(res);
    }
});
app.get("/updateData", (req, res) => {
  data = req.query.data;
  while (waitingClient.length > 0) {
    const client = waitingClient.pop();
    client.json({ data });
  }
  res.send({ success: "Data updated successfully" });
});
app.listen(3000, () => {
  console.log("listening at port 3000");
});
