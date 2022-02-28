// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)

(() => {
	let button = document.querySelectorAll('button');

	button.forEach((b) => {
		b.addEventListener('click', () => {
			document.body.style.background = b.id;
		});
	});
})();
