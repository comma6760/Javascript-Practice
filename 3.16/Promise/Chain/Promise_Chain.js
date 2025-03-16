function firstTask() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("첫 번째 작업 완료");
			resolve("첫 번째 작업 결과");
		}, 1000);
	})
}

function secondTask(result) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("두 번째 작업 완료: " + result);
			resolve("두 번째 작업 결과");
		}, 1000);
	})
}

function thirdTask(result) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("세 번째 작업 완료: " + result);
			resolve("세 번째 작업 결과");
		}, 1000);
	})
}

firstTask()
.then(result => secondTask(result))
.then(result => thirdTask(result))
.then(result => {
	console.log("모든 작업 완료: " + result);
})
.catch(error => {
	console.error("에러 발생: " + error);
});