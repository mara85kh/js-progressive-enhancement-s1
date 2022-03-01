// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French

(() => {
	const birds = [{ name: 'mouette', fem: true }, { name: 'corbeau' }, { name: 'mésange', fem: true }, { name: 'hibou' }, { name: 'buse', fem: true }, { name: 'pigeon' }, { name: 'pie', fem: true }, { name: 'vautour' }, { name: 'faucon' }, { name: 'rouge-gorge' }, { name: 'tourterelle', fem: true }, { name: 'corneille', fem: true }];
	const adjectives = new Set(['cendré', 'huppé', 'chantant', 'hurlant', 'perché', 'grand', 'petit', 'bleu', 'pantelant', 'tangent', 'arboré']);

	// your code here

	const generateRandom = (arr) => {
		return Math.floor(Math.random() * arr.length);
	};

	document.getElementById('run').addEventListener('click', () => {
		let adjectivesArray = Array.from(adjectives);
		let indexOne = generateRandom(birds);
		let indexTwo = generateRandom(adjectivesArray);

		let birdName = birds[indexOne].name;
		let birdAdjective = adjectivesArray[indexTwo];

		if (birds[indexOne].fem === true) {
			birdAdjective += 'e';
		}

		document.getElementById('target').innerHTML = birdName + ' ' + birdAdjective;
	});
})();
