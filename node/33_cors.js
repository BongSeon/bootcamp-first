// cors - Cros-O
//
//

const express = require("express");
const app = express();
//npm install cors
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:8080", // 허용할 도메인 설정
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// 이후에 모든 설정한 라우팅 정의는 cors 위배되더라도 option에 해당하는 오리진에 대해서 허용해준다.

app.get("/", (req, res) => {
  res.send("Ok");
});

// 이렇게 라우팅별로 따로 적용할 수도 있다
app.get("/products/:id", cors(corsOptions), (req, res) => {
  //
});
