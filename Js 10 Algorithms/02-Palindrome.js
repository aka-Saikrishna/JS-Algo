// Directions
/*
Given a string, return true if the string is a palindrome or false if it is not.
Palindrome are string that form the same word if it is reversed
Examples:
palindrome("madam") === true // madam
palindrome("sir") === false // ris
*/ 

const palindrome = (str) => {
    const reversed = str.split('').reverse().join('')
    // if(str === reversed){
    //     return true
    // }
    // return false
    return str === reversed ? `${str.charAt(0).toUpperCase() + str.slice(1)} a palindrome` : `${str.charAt(0).toUpperCase() + str.slice(1)} Not a palindrome`
}

console.log(palindrome("madam")); //true // madam
console.log(palindrome("cool")); //false  //looc

// Using every method
function palindrome1(str) {
    return str.split('').every((ele, i) => {
      return ele == str[str.length - i - 1]
    })
  }
  console.log(palindrome2("madam"));
  // two pointer technique
  
  function palindrome2(str) {
    let first = 0
    let last = str.length - 1
    while (first < last) {
      if (str[first] != str[last]) {
        return false
      }
      else {
        first++
        last--
      }
    }
    return true
  }
console.log(palindrome2("madam"));