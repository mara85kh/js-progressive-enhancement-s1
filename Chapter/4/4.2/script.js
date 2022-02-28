// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)

(() => {
	// to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

	// your code here
	const date = new Date();
	let current = date.getHours() + ':' + date.getMinutes();
	let time = '17:30';

	if (current <= time) {
		document.getElementById('target').innerHTML = 'Hello';
	} else {
		document.getElementById('target').innerHTML = 'Good evening';
	}
})();
