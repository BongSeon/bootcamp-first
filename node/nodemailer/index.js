const nodemailer = require("nodemailer");

// 교재 261
const config = {
  service: "gmail",
  host: "smtp.gmail.com", // SMTP 서버 호스트 주소
  port: 587, // 포트 번호
  secure: false, // true 면 SMTP 서버 접속 시 TLS를 사용, true이면 일반적으로 포트 번호는 465를 사용
  auth: {
    user: process.env.GOOGLE_MAIL, // SMTP 서버 사용자 계정
    pass: process.env.GOOGLE_PASSWORD, // 비밀 번호
  },
};

const send = async (data) => {
  const transporter = nodemailer.createTransport(config);
  transporter.sendMail(data, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      return info.response;
    }
  });
};

module.exports = {
  send,
};
