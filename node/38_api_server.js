const express = require("express");
const app = express();
require("dotenv").config({ path: "mysql/.env" });
const mysql = require("./mysql");
const uuidAPIKey = require("uuid-apikey");

//원래는 발급요청이들어오면 실행되는함수
// console.log(uuidAPIKey.create());
// 발급되는 키
const accessKey = {
  apiKey: "2RQ9KFH-1GN4KMW-P4QPT7G-86HSJA6", // 이부분을 알려준다
  uuid: "162e99be-0c2a-49d3-b12f-6d1e41a39928", //이부분은 디비에 저장되어서 대조할때 확인한다
};

app.listen(3001, () => {
  console.log("API 서버가 3001 포트로 시작되었습니다.");
});

app.get("/api/:apikey/category", async (req, res) => {
  // apikey 확인
  if (uuidAPIKey.toUUID(req.params.apikey) !== accessKey.uuid) {
    console.log("비정상적인 API key 사용");
    return res.send("Access denied!");
  }
  const categoryList = await mysql.query("categoryList");
  res.send(categoryList);
});
