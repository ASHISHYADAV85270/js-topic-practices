import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import path from "path";
const app = express();
const server = createServer(app); // creating a server for our application
const io = new Server(server); // wrapping the socket.io server on the top of our app server
const __dirname = path.resolve(path.dirname(""));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    console.log('recieved message');
    
    // sending message to all the users
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("User DisConnected");
  });
});
app.listen(3000, () => {
  console.log("serve listening at port 3000");
});
