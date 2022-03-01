// 07-classes/03-inheritance/script.js - 7.3: inheritance

(() => {
	class Animal {
		sayHello() {
			return `${this.constructor.greeting}! I'm ${this.name}!`;
		}
	}
	// your code here
	class Dog extends Animal {
		constructor(greeting, name) {
			super(greeting, name);
			(this.constructor.greeting = greeting), (this.name = name);
		}
	}
	class Cat extends Animal {
		constructor(greeting, name) {
			super(greeting, name);
			(this.constructor.greeting = greeting), (this.name = name);
		}
	}

	document.getElementById('run').addEventListener('click', () => {
		const myDog = new Dog('Hey', 'Rufus');
		const myCat = new Cat('Hello', 'Kitty');
		console.log(myDog.sayHello());
		console.log(myCat.sayHello());
	});
})();
