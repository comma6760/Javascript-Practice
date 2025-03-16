function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchData() {
	console.log("데이터를 가져오는 중...");
	await delay(2000);
	console.log("데이터를 가져왔습니다.");
}
fetchData();