// 06-objects/01-generate-object/script.js - 6.1: genererate an object

(() => {
	document.getElementById('run').addEventListener('click', () => {
		const obj = {
			firstname: 'Jason',
			lastname: 'Felgenhauer',
			age: 19,
			town: 'Namur',
			country: 'Belgique',
		};

		console.log('My name is ' + obj.firstname + ' ' + obj.lastname + ", I' m " + obj.age + ' years old. And i live in ' + obj.town + ' in ' + obj.country);
	});
})();
