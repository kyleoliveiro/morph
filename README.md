# morph

Generate permutations of words through character substitution.

## Installation

	npm install -g morph-strings

## Usage

Basic usage:

	morph <word(s)> [options]

For help, run:

	morph -h

## Examples

To output a random permutation of the word "adventure":

	morph adventure

The above might output:

	4dv3ntu|23

To output all permutations of the word "cat":

	morph cat -p

The above will output:

	cat
	caT
	ca+
	cAt
	cAT
	cA+
	c4t
	c4T
	c4+
	c@t
	c@T
	c@+
	Cat
	CaT
	Ca+
	CAt
	CAT
	CA+
	C4t
	C4T
	C4+
	C@t
	C@T
	C@+
	(at
	(aT
	(a+
	(At
	(AT
	(A+
	(4t
	(4T
	(4+
	(@t
	(@T
	(@+
	[at
	[aT
	[a+
	[At
	[AT
	[A+
	[4t
	[4T
	[4+
	[@t
	[@T
	[@+
