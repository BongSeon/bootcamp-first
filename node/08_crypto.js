const crypto = require("crypto");

console.log(crypto.createHash("sha512").update("pw1234").digest("base64"));
console.log(crypto.createHash("sha512").update("pw1234").digest("hex"));
// 9iSeOd1vv2qinR2UM5Aog5LmqBncF/oFeTTsPUjqwGoG3lG232280LqAScE7FR7HHe4K0gyedCN7iZDZl+NZaA==
// f6249e39dd6fbf6aa29d1d943390288392e6a819dc17fa057934ec3d48eac06a06de51b6df6dbcd0ba8049c13b151ec71dee0ad20c9e74237b8990d997e35968
// 레인보우 테이블
// pw1234 sha512, base64, 9iSeOd1vv2qinR2UM5Aog5LmqBncF/oFeTTsPUjqwGoG3lG232280LqAScE7FR7HHe4K0gyedCN7iZDZl+NZaA==
// pw1234, sha512, hex,

// salting 암호화
//

const createSalt = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) reject(err);
      resolve(buf.toString("base64"));
    });
  });
};

const createCryptoPassword = async (plainPassword) => {
  const salt = createSalt(); //
  // 암호화할 문자열, salt, 반복횟수, 출력할 바이트수, 해시 알고리즘
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plainPassword, salt, 100000, 64, "sha512", (err, key) => {
      if (err) reject(err);
      resolve({ password: key.toString("base64"), salt });
    });
  });
};

const getCryptoPassword = async (plainPassword, salt) => {
  // 암호화할 문자열, salt, 반복횟수, 출력할 바이트수, 해시 알고리즘
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plainPassword, salt, 100000, 64, "sha512", (err, key) => {
      if (err) reject(err);
      resolve({ password: key.toString("base64"), salt });
    });
  });
};

// 사용자 아이디, 암호화된 비밀번호, salt
// 사용자 아이디, 비밀번호
// -> salt
//
