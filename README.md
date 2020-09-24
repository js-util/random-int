# Random Int

Returns a random int between the max (exclusive) and min (inclusive) bounds

# npm install

```.bash
npm install --save @js-util/random-int
```

# Example usage

```.js
// Importing the module
const randomInt = require("@js-util/random-int");

// Get some random value
let value = randomInt(0, 100);
```

# Its code

```.js
/**
 * Returns a random int between the min, and max bound
 * 
 * @param {int} min value to generate, inclusively (meaning its possible to return min)
 * @param {int} max value to generate, exclusively (meaning it never returns max, unless max == min)
 * 
 * @return {int} random int between max (exclusive) and min (inclusive)
 */
function randomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// Export the function
module.exports = randomInt;
```
