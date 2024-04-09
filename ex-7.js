function isPalindrome(string) {
  // Start coding here
  const reversedStr = string.split("").reverse().join("")
  return string === reversedStr
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false