const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const mime = require("mime"); //npm install mime

app.use(
  express.json({
    limit: "50mb", // 최대 50메가
  })
); // 클라이언트 요청 body를 json으로 파싱 처리

app.listen(3000, () => {
  console.log("서버가 포트 3000번으로 시작되었습니다.");
});

app.get("/file/:filename", (req, res) => {
  const file = "./uploads/" + req.params.filename;
  try {
    // 파일이 존재하는지
    if (fs.existsSync(file)) {
      // 예전 방식
      // const mimetype = mime.getType(file);
      // const filename = path.basename(file);
      // res.setHeader("Content-disposition", "attachment; filename=" + filename); // 다운파일이름
      // res.setHeader("Content-type", mimetype); // 파일타입지정
      // const filestream = fs.createReadStream(file);
      // filestream.pipe(res);
      res.download(file); // 실제 파일이 물리적공간에 있을때만 이 구문을 사용할 수 있다. (동적생성파일에는 위에 주석한 부분으로 해야한다.)
    } else {
      res.send("요청한 파일이 존재하지 않습니다.");
    }
  } catch (error) {
    console.log(error);
    res.send("파일을 다운로드 하는 중 에러가 발생했습니다.");
  }
});
