// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
	// Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
	console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
	console.log('Hello Keller programmer');

	// YOUR CODE HERE
	let age = prompt('How old are you ?');
	let gender = prompt('what gender are you ?');
	let town = prompt('Where do you come from ?');
	let bool = confirm('You are ' + age + ' years old, you are a ' + gender + ' and you come from ' + town);

	while (bool === false) {
		age = prompt('How old are you ?');
		gender = prompt('what gender are you ?');
		town = prompt('Where do you come from ?');
		bool = confirm('You are ' + age + ' years old, you are a ' + gender + ' and you come from ' + town);
	}
})();
