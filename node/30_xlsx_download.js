const express = require("express");
const app = express();
require("dotenv").config({ path: `mysql/.env.test` });
const mysql = require("./mysql");
const xlsx = require("xlsx");

app.use(
  express.json({
    limit: "50mb", // 최대 50메가
  })
);

app.listen(3000, () => {
  console.log("서버가 포트 3000번으로 시작되었습니다.");
});

app.get("/api/xlsx/categoryList", async (req, res) => {
  const workbook = xlsx.utils.book_new(); // 가상의 엑셀 파일 생성
  const categoryList = await mysql.query("categoryList");

  const firstSheet = xlsx.utils.json_to_sheet(categoryList, {
    header: ["product_category_id", "category_name", "category_description"],
    skipHeader: true, // skipheader가 false 이면 엑셀시트의 첫번째 행에 header가 해당하는 name,email, phone 이 나오게된다
  });

  firstSheet["!cols"] = [
    { wpx: 120 }, //  열 너비
    { wpx: 250 }, //  열 너비
    { wpx: 200 }, //  열 너비
  ];

  xlsx.utils.book_append_sheet(workbook, firstSheet, "Categories");
  res.setHeader("content-disposition", "attachment; filename=Categories.xlsx");
  const downloadFile = Buffer.from(
    xlsx.write(workbook, { type: "base64" }),
    "base64"
  ); //create buffer
  res.end(downloadFile);
});
