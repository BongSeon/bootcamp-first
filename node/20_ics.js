// .ics 확장자가 이렇게된걸 이메일로 첨부파일로 보내서 일정에 등록되게끔
// iCalender : 표준화된 일정관리
// npm ics
// https://www.npmjs.com/package/ics

const ics = require("ics");
require("dotenv").config({ path: `nodemailer/.env` });
const nodemailer = require("./nodemailer");

const event = {
  start: [2022, 4, 30, 9, 30], // 년, 월, 일, 시,분
  duration: { hours: 1, minutes: 30 }, // 이벤트 기간 ex. 1시간 30분
  title: "Node.js 스터디 모임",
  description: "개발자의품격NT", // REQ-PARTICIPANT : 필수참석자
  location: "제주도 더그레잇 3층",
  geo: { lat: 30.12, lon: 50.45 }, // 위도 경도
  organizer: { name: "BongSeon Kwak", email: "hawhawba@gmail.com" }, //주최자
  attendees: [
    {
      name: "aestas gmail",
      email: "hawhawba@gmail.com",
      rsvp: true, // 회신을 반드시 원하는지
      role: "REQ-PARTICIPANT",
    },
    {
      name: "aestas naver",
      email: "iissy85@naver.com",
      role: "OPT-PARTICIPANT", // OPT-PARTICIPANT : 선택참석자
    },
  ],
};

const sendEmailWithIcs = async () => {
  ics.createEvent(event, async (error, value) => {
    if (error) {
      console.log(error);
      return;
    }

    console.log(value);
    const message = {
      from: "hawhawba@gmail.com",
      to: "hawhawba@gmail.com, iissy85@naver.com",
      subject: "Node.js 스터디 모임",
      text: "개발자의품격 부트캠프 1기 스터티 모임",
      icalEvent: {
        filename: "invitaion.ics", //iCalendar 파일
        method: "REQUEST",
        content: value,
      },
    };
    await nodemailer.send(message); // 이메일 발송
  });
};

sendEmailWithIcs();
