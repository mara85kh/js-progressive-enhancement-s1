// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
	// to get the value of an input: document.getElementById("element-id").value
	let opOne = document.getElementById('op-one');
	let opTwo = document.getElementById('op-two');

	const performOperation = (operation) => {
		let a = parseInt(opOne.value);
		let b = parseInt(opTwo.value);

		if (isNaN(a) || isNaN(b)) {
			alert('Please enter a number...');
		}

		switch (operation) {
			case 'addition':
				alert(a + b);
				break;
			case 'substraction':
				alert(a - b);
				break;
			case 'multiplication':
				alert(a * b);
				break;
			case 'division':
				alert(a / b);
				break;
			default:
				break;
		}
	};

	Array.from(document.querySelectorAll('button.operator')).forEach(($btn) => $btn.addEventListener('click', () => (performOperation($btn.id), false)));
})();
