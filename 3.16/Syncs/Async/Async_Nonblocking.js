// Async Nonblocking
function asyncNonblockingTask() {
	console.log("[Async Nonblocking] 작업 1 시작");

	setTimeout( () => {
		console.log("[Async Nonblocking] 작업 1 종료 (타임아웃 후)");
	}, 2000); // working Async (wait for 2sec)

	console.log("[Async Nonblocking] 다른 작업 실행 중...");
}

asyncNonblockingTask();