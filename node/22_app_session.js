const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();

app.use(
  express.json({
    limit: "50mb", // 최대 50메가
  })
); // 클라이언트 요청 body를 json으로 파싱 처리

app.use(cookieParser());

// 세션 처리
// 클라이언트가 로그인 되어있을때만 실행시키게 해야한다.
// 로그인 정보가 필요
// 세션에 정보를 담았다가 로그인되어있는지 여부 체크
// npm install express-session
let sess = {
  secret: "secret key",
  resave: false, // 세션에 변경사항이 없어도 항상 다시 저장할지 여부
  saveUninitialized: true, // 초기화되지 않은 세션을 저장소에 강제로 저장할지 여부
  cookie: {
    httpOnly: true, // document.cookie 해도 쿠키 정보를 볼 수 없음
    secure: false, // https
    maxAge: 1000 * 60 * 60, // 쿠키가 유지되는 시간
  },
};

// 실제서비스에서는 아래와 같이 설정해서 https 로만 접속하도록 해야 한다.
// if (app.get("env" == "prod")) {
//   sess.cookie.secure = true;
// }

app.use(session(sess));

// 로그인
app.post("/login", (req, res) => {
  const { email, pw } = req.body.param;
  // ... (데이터베이스에 해당하는 사용자가 있는지, 비밀번호는 맞는지 체크하는 부분)

  req.session.email = email;
  req.session.isLogined = true;
  req.session.save((err) => {
    // session 저장 실패
    if (err) throw err;

    res.send(req.session);
  });
});

// 로그아웃
app.post("/logout", (req, res) => {
  if (req.session.email) {
    req.session.destroy();
    res.redirect("/login");
  }
});

// 로그인되어있으면 여기서 걸리도록한다.
app.all("*", (req, res, next) => {
  if (req.session.email) {
    console.log(req.cookies);
    next();
  } else {
    res.redirect("/login");
  }
});

// 세션(로그인 여부) 체크
app.get("/test", (req, res) => {
  // 위에서 app.all 로 체크하기 때문에 이부분 필요없다
  // if (!req.session.email) {
  //   res.redirect("/login");
  // }

  res.send("Ok");
});

app.listen(3000, () => {
  console.log("서버가 포트 3000번으로 시작되었습니다.");
});
