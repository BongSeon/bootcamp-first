//
// 웹소켓 서버에 대한 코드

const express = require("express");
const { createServer } = require("http"); //node js 기본 내장 모듈
// npm install socket.io
const { Server, Socket } = require("socket.io");
const cors = require("cors");

const app = express();
const httpServer = createServer(app); // 익스프레스로 만든 앱을 이안에 넣어줌

const corsOptions = {
  origin: "http://localhost:5500", // 허용할 도메인
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5500",
    methods: ["GET", "POST"], // 허용할 메소드
  },
});

// client에서 웹서버로 연결되면 그때 실행할 콜백함수
io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    // socket 연결이 종료되었을 때 수행할 코드
  });

  // 이벤트이름 client2Server은상관없다
  socket.on("client2server", (data) => {
    console.log(data); //client로 부터 전달된 메시지
    // socket.emit("",{})//메시지를 전송한 클라이언트에게만 전송
    // socket.broadcast.emit("",{})//메시지를 전송한 클라이언트를 뺀 나머지 모두에게에게 전송
  });
});

// 서버에서 클라이언트에게 1초마다 랜덤숫자 전송(테스트)
// 이벤트발생 emit
const sendMsgToClient = () => {
  setInterval(() => {
    io.emit("server2client", {
      code: `item${Math.random()}`,
      price: Math.random(),
    }); // 이벤트이름은상관없다
  }, 1000);
};

app.get("/socket", (req, res) => {
  sendMsgToClient();
  res.send("서버로부터 메시지 전송 시작");
});

httpServer.listen(3000, () => {
  console.log("3000 port httpServer start");
});
