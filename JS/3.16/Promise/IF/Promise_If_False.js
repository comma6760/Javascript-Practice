let myPromise = new Promise((resolve, reject) => {
	let success = false; // 성공 여부를 임의로 설정
	setTimeout(() => {
		if (success) {
			resolve("작업 성공"); // 작업이 성공적으로 완료되면 resolve 호출
		}
		else {
			reject("작업 실패"); // 작업이 실패하면 reject 호출
		}
	}, 100);
})

myPromise
.then(result => {
	console.log(result); // 이행된 경우의 처리
})
.catch(error => {
	console.error(error); // 거부된 경우의 처리
})