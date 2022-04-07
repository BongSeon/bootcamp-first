const path = require("path");
// 모든 파일 경로는 이 객체를 쓰면 쉽게 해결된다.

console.log(__filename);
console.log(__dirname);
console.log(path.basename(__filename));
console.log(path.basename(__filename, ".js"));
console.log(path.extname("index.html"));

// index.html
// const filename = "index.html";
// filename.substring(filename.indexOf("."))

console.log(path.parse("/home/user/dir/file.txt"));
