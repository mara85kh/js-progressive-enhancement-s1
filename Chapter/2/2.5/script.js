// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
	// to get the value of an input: document.getElementById("element-id").value

	document.getElementById('run').addEventListener('click', () => {
		// your code here
		let number = parseInt(document.getElementById('number').value);
		if (isNaN(number)) return alert('Please enter a number...');

		let result = 1;
		for (let i = 1; i <= number; i++) {
			result = result * i;
		}

		alert(result);
	});
})();
