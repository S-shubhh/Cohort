/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
   let str2 = str.replace(/\s/g,'');
   let count = 0 ;
    let vowels = "aeiouAEIOU" ;
   for(let i = 0 ; i < str2.length ; i++ )
   {
     if(vowels.includes(str2[i]))
     count++;
   }
   return count;

   
    // Your code here
}

module.exports = countVowels;