const mysql = require("mysql");
const sql = require("./sql");

// 10개 pool을 만들어서 돌아가면서 사용
const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "aestas",
  password: "Kloplo990@",
  database: "dev",
  connectionLimit: 10,
});

/* 쿼리문을 실행하고 결과를 반환하는 함수 */
const query = async (alias, values) => {
  return new Promise((resolve, reject) =>
    pool.query(sql[alias], values, (error, results) => {
      if (error) {
        // 에러가 발생
        console.log(error);
        reject({
          error,
        });
      } else resolve(results); // 쿼리 결과를 전달
    })
  );
};

module.exports = {
  query,
};
