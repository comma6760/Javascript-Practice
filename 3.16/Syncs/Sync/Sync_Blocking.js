//Sync blocking
function syncblockingTask() {
	console.log("[Sync Blocking] 작업 1 시작");
	for (let i =0;i< 1e9; i++) {} //시간 소모 작업
	console.log("[Sync Blocking] 작업 1 종료");
}

syncblockingTask();