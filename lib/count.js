var characterMap = require('./characterMap.js');

var count = function(words) {
	var inputString = words.join(' ');
	var characters = inputString.split('');
	var count = 0;

	characters.forEach(function(character, index) {
		if(character in characterMap) {
			var substitutions = characterMap[character];

			if(index == 0) {
				count += substitutions.length;
			} else {
				count = count * substitutions.length;
			}
		} else {
			return false;
		}
	});

	return count;
}

module.exports = count;
