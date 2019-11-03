// server 에서 js 파일 불러오기
function loadJSFromServer() {
	var url = "https://momentjs.com/downloads/moment.js";
	var javascript = UrlFetchApp.fetch(url).getContentText();
	eval(javascript);
}
// 구글 드라이브에서 js 파일 불러오기
function loadJSFromGoogleDrive(id) {
	var rawJS = DriveApp.getFileById(id)
		.getBlob()
		.getDataAsString();
	eval(rawJS);
}

var Libraries = {
	moment: "https://momentjs.com/downloads/moment.js"
};

function loadJSFromUrl(url) {
	return eval(UrlFetchApp.fetch(url).getContentText());
}

function testFunc() {
	loadJSFromUrl(Libraries["moment"]);
	return moment().format();
}
