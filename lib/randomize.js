var characterMap = require('./characterMap.js');

var randomize = function(words) {
	var inputString = words.join(' ');
	var characters = inputString.split('');
	var output = '';

	characters.forEach(function(character) {
		if(character in characterMap) {
			var substitutions = characterMap[character];
			var randomIndex = Math.floor(Math.random() * substitutions.length);
			output += substitutions[randomIndex];
		} else {
			output += character;
		}
	});

	return output;
}

module.exports = randomize;
