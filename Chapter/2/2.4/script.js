// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {
	// to get the value of an input: document.getElementById("element-id").value

	document.getElementById('run').addEventListener('click', () => {
		let input = document.getElementById('numbers');
		let inputArr = input.value.split(', ');

		input.value = inputArr.sort((a, b) => a - b);
	});
})();
