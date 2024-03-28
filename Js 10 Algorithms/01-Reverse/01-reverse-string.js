// Directions
// Given a string, return a new string with the reversed order of characters
// Examples
// reverse('hi') === 'ih'
// reverse('hello') === 'olleh'

// Method-1: Using for loop
/*const reverse = (str) => {
    let reversed = ''
    // for (let i = 0; i < str.length; i++) {
    //     reversed =  str[i] + reversed  
    // } 
    for(let char of str){
        reversed =  char + reversed
    }
        return reversed 
}
console.log(reverse("hello")); */

// Method-2: built-in reverse method. we can only use this to arrays. First we have to covert the string to array then reverse it and convert back to string

const reverse = (str) => {
    return str.split('').reverse().join('')
}
console.log(reverse("hello"));