/**
 * Returns a random int between the max (exclusive) and min (inclusive) bounds
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