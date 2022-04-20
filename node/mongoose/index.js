const mongoose = require("mongoose");

const connect = () => {
  mongoose.set("debug", true); // 디버깅 정보 출력하도록 설정

  // mongoDB 접속 정보 전달
  mongoose.connect(
    `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}`,
    { dbName: process.env.MONGODB_DB },
    (error) => {
      // 3번째 파라미터는 콜백함수
      if (error) {
        console.log("MongoDB 연결 실패 ", error);
      } else {
        console.log("MongoDB 연결 성공");
      }
    }
  );
};

// event 발생했을때 처리
mongoose.connection.on("error", (error) => {
  console.log("MongoDB 연결 에러 ", error);
});
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB 연결이 종료되어 연결을 재시도 합니다.");
  connect();
});

module.exports = {
  connect,
};
