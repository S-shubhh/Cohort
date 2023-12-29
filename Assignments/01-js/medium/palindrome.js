/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Remove non-alphabetic characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z]/g, '').toLowerCase();

  // Reverse the cleaned string
  const reverseString = cleanedStr.split('').reverse().join('');

  // Compare the cleaned string and its reverse
  return cleanedStr === reverseString;
}


module.exports = isPalindrome;

