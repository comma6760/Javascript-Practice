// Async Blocking
async function asyncBlockingTask() {
	console.log("[Async Blocking] 작업 1 시작");
	await new Promise((resolve) => {
		setTimeout(resolve, 2000)
	});
// wating Async (2sec)
	console.log("[Async Blocking] 작업 1 종료");
}
asyncBlockingTask().then(() => {
	console.log("[Async Blocking] 작업 1 완료");
})