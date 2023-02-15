//
// Import the library
//

import { switchExp } from './../../main.js'
// import { switchExp } from '@h2mlagency/expressiveswitch'

//
// Define an expressive case
//

const expressiveSwitch = switchExp([
	[(1), (
		'Equals 1'
	)],
	[v => (v < 2 || v === 4), (exit) => (
		exit('Less than 2, or equal to 4.')
	)],
	[v => (v < 3), (
		'Less than three.'
	)],
	['Default Case']
]);

//
// Check the results in the console.
//

console.log([1, 2, 3, 4, 5].map(num => {
	return expressiveSwitch.eval(num);
}))