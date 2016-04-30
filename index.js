var randomize = require('./lib/randomize.js');
var count = require('./lib/count.js');
var permute = require('./lib/permute.js');

var morph = function(words, output) {
	if(typeof words != 'array') {
		words = words.split(' ');
	}

	switch(output) {
		case 'count':
			return count(words);
			break;
		case 'permute':
			return permute(words);
			break;
		default:
			return randomize(words);
	}
}

module.exports = morph;
