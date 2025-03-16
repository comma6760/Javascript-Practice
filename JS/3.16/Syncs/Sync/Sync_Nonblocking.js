// Sync Nonblocking
function syncNonblockingTask() {
	console.log("[Sync Nonblocking] 작업 1 시작");
}
setTimeout(syncNonblockingTask, 0); //동기적이지만 블로킹 없이 실행