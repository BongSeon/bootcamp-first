const axios = require("axios");
const cheerio = require("cheerio");
require("dotenv").config({ path: `nodemailer/.env` });
const nodemailer = require("./nodemailer");

const getHTML = async (keyword) => {
  try {
    const html = (
      await axios.get(
        `https://www.jobkorea.co.kr/Search/?stext=${encodeURI(keyword)}`
      )
    ).data;
    return html;
  } catch (e) {
    console.log(e);
  }
};

const parsing = async (page) => {
  const $ = cheerio.load(page);
  const jobs = [];
  const $jobList = $(".list-post");
  $jobList.each((idx, node) => {
    const jobTitle = $(node).find(".title:eq(0)").text().trim();
    const company = $(node).find(".name:eq(0)").text().trim();
    const experience = $(node).find(".exp:eq(0)").text().trim();
    const education = $(node).find(".edu:eq(0)").text().trim();
    if (
      experience.indexOf("신입") > -1 ||
      experience.indexOf("경력무관") > -1
    ) {
      jobs.push({
        jobTitle,
        company,
        experience,
        education,
      });
    }
  });

  return jobs;
};

const getJobs = async (keyword) => {
  const html = await getHTML(keyword);
  const jobs = await parsing(html);
  console.log(jobs);

  const h = [];

  const message = {
    from: "hawhawba@gmail.com",
    to: "hawhawba@gmail.com, iissy85@naver.com",
    subject: "vue.js 구인 ",
    html: h.join(""),
  };
  // await nodemailer.send(message); // 이메일 발송
};

getJobs("vue.js");
