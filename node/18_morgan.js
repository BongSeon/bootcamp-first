// 로그 관리를 위한 모듈 (파일로 관리)
const express = require("express");
const app = express();
const fs = require("fs");
const morgan = require("morgan");
const rfs = require("rotating-file-stream");
//로그파일을 하나의 파일에 적는게 아니고, 추적하기 어려우니까
//로그파일을 일자별로 또는 일정 시간단위로 또는 특정 사이즈를 초과한다거나 하면 파일이름을 다르게 채번

const path = require("path");

const generator = (time, index) => {
  if (!time) return "file.log";

  const yearmonth =
    time.getFullYear() + (time.getMonth() + 1).toString().padStart(2, "0");
  const day = time.getDate().toString().padStart(2, "0");
  const hour = time.getHours().toString().padStart(2, "0");
  const minute = time.getMinutes().toString().padStart(2, "0");

  return `${yearmonth}/${yearmonth}${day}-${hour}${minute}-${index}-file.log`;
};

// 파일명은 고정된 값이 아닌 자동값으로 (generator라는 함수)
const accessLogStream = rfs.createStream(generator, {
  interval: "1d", // 1 day
  size: "10M", // 10 MB per 1 file
  path: path.join(__dirname, "log"), // log 라는 폴더에 저장
});

// app.use(morgan("combined", { stream: accessLogStream }));
// 에러상황에서만
app.use(
  morgan("combined", {
    stream: accessLogStream,
    skip: function (req, res) {
      return res.statusCode < 400; // 상태코드 400 이하일땐 아무것도 기록 안하겠다
    },
  })
);

app.get("/", (req, res) => {
  res.send("Hellow World");
});

app.listen(3000, () => {
  console.log("서버가 포트 3000번으로 시작되었습니다.");
});
