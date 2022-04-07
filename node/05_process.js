const process = require("process");

process.on("beforeExit", (code) => {
  // 이벤트 루프에 등록된 작업이 모든 종료되고, 노드 프로세스가 종료되기 직전
  console.log("beforeExit 이벤트 리스너", code);
});

// process.exit()
// 프로세스를 강제 종료하고 다시 실행해야하는 상황같을때 쓸수 있다

// 프로세스 종료될때 비정상종료상황에 대비한 로그를 남긴다거나 할때 쓰일 수 있다.
process.on("exit", (code) => {
  console.log("exit 이벤트 리스너", code);
});

console.log("출력");
