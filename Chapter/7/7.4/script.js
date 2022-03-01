// 07-classes/04-getter-setter/script.js - 7.4: getter & setter

(() => {
	// your code here
	class Person {
		constructor(firstname, lastname) {
			(this.firstname = firstname), (this.lastname = lastname);
		}
		getname() {
			return this.firstname + ' ' + this.lastname;
		}
		setname() {
			let fullname = this.getname();
			let arr = fullname.split(' ');
			return arr;
		}
	}

	document.getElementById('run').addEventListener('click', () => {
		const me = new Person('Jason', 'Felgenhauer');

		console.log(me.getname());

		// Pas fini car pas compris
	});
})();
