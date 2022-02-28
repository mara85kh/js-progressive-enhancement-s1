// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array
const randomNumber = (number) => {
	let array = [];
	for (let i = 0; i < number; i++) {
		array.push(Math.floor(Math.random() * 100));
	}
	return array;
};
const sum = (array) => {
	let sum = 0;

	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}

	return sum;
};
const average = (array) => {
	return sum(array) / array.length;
};
(() => {
	document.getElementById('run').addEventListener('click', () => {
		let numbers = randomNumber(10);

		const min = Math.min.apply(Math, numbers);
		const max = Math.max.apply(Math, numbers);
		let element = 1;

		for (let i = 0; i < 10; i++) {
			document.getElementById('n-' + element).innerHTML = numbers[i];
			element++;
		}

		document.getElementById('min').innerHTML = min;
		document.getElementById('max').innerHTML = max;
		document.getElementById('sum').innerHTML = sum(numbers);
		document.getElementById('average').innerHTML = average(numbers);
	});
})();
