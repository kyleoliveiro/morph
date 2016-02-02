var _ = require('lodash');
var characterMap = require('./characterMap.js');

var permute = function(words) {
	var inputString = words.join(' ');
	var characters = inputString.split('');
	var output = characterMap[characters[0]];

	characters = characters.slice(1);
	characters.forEach(function(character, index) {
		if(character in characterMap) {
			var substitutions = characterMap[character];
			var _outLen = output.length;
			var _subLen = substitutions.length;
			var _store = [];

			for(var x = 0; x < _outLen; x++) {
				for(var y = 0; y < _subLen; y++) {
					var _result = output[x] + substitutions[y];
					_store.push(_result);
				}
			}

			output = _store;
		} else {
			return false;
		}
	});

	return _.flattenDeep(output).join('\n');
}

module.exports = permute;
