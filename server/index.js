import e from "express";
import http from "http";
import { Server } from "socket.io";


const app = e();
const server = http.createServer(app);

app.use(e.static("public"));

const io = new Server(server);



io.on("connection", (socket) => {

    console.log("A user connected", socket.id);

    socket.on("message", (msg) => {
        console.log("Message from client: ", msg);
        io.emit("message", msg);
    });





});


app.get("/", (req, res) => {
    res.sendFile("index.html");
});






server.listen(3000, () => {
    console.log("Server is running on port 3000");
});