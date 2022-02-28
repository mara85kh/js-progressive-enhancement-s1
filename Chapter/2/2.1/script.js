// 02-maths/01-calculator-one/script.js - 2.1: calculator1
let opOne = document.getElementById('op-one');
let opTwo = document.getElementById('op-two');

(() => {
	// to get the value of an input: document.getElementById("element-id").value

	document.getElementById('addition').addEventListener('click', function () {
		let a = parseInt(opOne.value);
		let b = parseInt(opTwo.value);

		if (isNaN(a) || isNaN(b)) {
			return alert('Please enter a number...');
		} else {
			alert(a + b);
		}
	});

	document.getElementById('substraction').addEventListener('click', function () {
		let a = parseInt(opOne.value);
		let b = parseInt(opTwo.value);

		if (isNaN(a) || isNaN(b)) {
			return alert('Please enter a number...');
		} else {
			alert(a - b);
		}
	});

	document.getElementById('multiplication').addEventListener('click', function () {
		let a = parseInt(opOne.value);
		let b = parseInt(opTwo.value);

		if (isNaN(a) || isNaN(b)) {
			return alert('Please enter a number...');
		} else {
			alert(a * b);
		}
	});

	document.getElementById('division').addEventListener('click', function () {
		let a = parseInt(opOne.value);
		let b = parseInt(opTwo.value);

		if (isNaN(a) || isNaN(b)) {
			return alert('Please enter a number...');
		} else {
			alert(a / b);
		}
	});
})();
