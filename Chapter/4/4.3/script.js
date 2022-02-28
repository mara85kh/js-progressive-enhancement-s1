// 04-dates/03-age-by-select/script.js - 4.3: calculate the age

(() => {
	document.getElementById('run').addEventListener('click', () => {
		let year = document.getElementById('dob-year');
		let date = new Date();
		let current = date.getFullYear();

		alert('You have ' + (current - year.value) + ' years old');
	});
})();
