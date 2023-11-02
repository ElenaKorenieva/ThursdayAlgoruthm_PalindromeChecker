// Thursday task: Palindrome Checker
// Check for Palindromes
// Declare a function isPalindrome(str) that takes a string as an input.

// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// variant # 1
// //Pseudocode
// 1. Create a function which takes string parameter;
// 2. Create a variable strLen to store length of the parameter string;
// 3. Loop through half of the string;
// 4. Inside for loop check if first and last string are the same;
// 5. Call the function inside console.log with necessary argument.

function isPalindrome(str) {
  const strLen = str.length;

  for (let i = 0; i < strLen / 2; i++) {
    if (str[i] !== str[strLen - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("cloud"));

// varianr # 2
// Pseudocode
// 1. Create a function which takes string parameter;
// 2. Create reversedStr variable and store reversed value of the parameter string;
// 3. Compare parameter string with reversed sting;
// 4. Call the function with necessary argument inside console.log.
function isPalindrome2(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr ? true : false;
}

console.log(isPalindrome2("level"));
console.log(isPalindrome2("sun and rain"));
