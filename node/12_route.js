const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("서버가 포트 3000번으로 시작되었습니다.");
});

// b가 생략 가능 즉 /abcd or /acd
app.get("ab?cd", (req, res) => {
  res.send("ab?cd");
});

// b가 1개 이상
app.get("ab+cd", (req, res) => {
  res.send("ab+cd");
});

/* 동시에 2개이상의 조건을 만족한 경우에 먼저 선언된 라우트가 실행된다. */

app.get("/ab*cd", (req, res) => {
  res.send("ab*cd");
});

app.get(/a/, (req, res) => {
  res.send("/a/");
});

app.get(/^insert/, (req, res) => {
  res.send("/a/");
});
