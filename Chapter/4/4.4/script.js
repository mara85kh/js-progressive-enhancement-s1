// 04-dates/04-locale-date/script.js - 4.4: textual date

(() => {
	// to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
	// your code here

	const months = {
		0: 'January',
		1: 'February',
		2: 'March',
		3: 'April',
		4: 'May',
		5: 'June',
		6: 'July',
		7: 'August',
		8: 'September',
		9: 'October',
		10: 'November',
		11: 'December',
	};
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday'];

	const date = new Date();
	const day = date.getDay();
	const currentDate = date.getDate();
	const month = date.getMonth();
	const year = date.getFullYear();
	const hours = date.getHours() + 'h' + date.getUTCMinutes();

	const fullDate = days[day] + ' ' + currentDate + ' ' + months[month] + ' ' + year + ', ' + hours;

	document.getElementById('target').innerHTML = fullDate;
})();
