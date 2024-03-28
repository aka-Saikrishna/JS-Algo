// Directions
// Given a integer, return a new integer with the reversed order of number
// Examples
// reverseInt(15) === 51
// reverseInt(15134) === 43151


/**
 * This function reverses the digits of an integer.
 *
 * @param {number} n - The integer to be reversed.
 * @return {number} The reversed integer.
 */
const reverseInt = (n) => {
    // Convert the integer to a string, split it into an array of characters, reverse the array, and join it back into a string
    const reversed = n.toString().split('').reverse().join('')
    // Convert the reversed string back to an integer and return it
    return parseInt(reversed) * Math.sign(n)
}
console.log(reverseInt(-227)) //-722
