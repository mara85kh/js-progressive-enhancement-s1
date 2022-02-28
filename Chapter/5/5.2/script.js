// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {
	let fruits = ['pomme', 'poire', 'fraise', 'tomate', 'orange', 'mandarine', 'durian', 'pêche', 'raisin', 'cerise'];

	// your code here
	document.getElementById('run').addEventListener('click', () => {
		console.log(fruits);
		fruits.pop();
		fruits.shift();
		fruits.splice(0, 0, 'banana');
		fruits.splice(fruits.length, 0, 'kiwi');
		console.log(fruits);
	});
})();
