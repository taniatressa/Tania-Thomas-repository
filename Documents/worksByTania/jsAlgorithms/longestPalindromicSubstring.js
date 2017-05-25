function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function longestpalindromicSubstring(str) {
  var maxLength = 0,
    i, j, substr;
  var maxp = '',
    strLength = str.length;

  for (i = 0; i < strLength; i++) {
    subs = str.substr(i, strLength);
    for (j = subs.length; j >= 0; j--) {
      sub_substr = subs.substr(0, j)
      if (sub_substr < 1) continue;
      if (isPalindrome(sub_substr)) {
        if (sub_substr.length > maxLength) {
          maxLength = sub_substr.length;
          maxp = sub_substr;
        }
      }
    }
  }
  return maxp;
}

console.log(longestpalindromicSubstring('noon'))
console.log(longestpalindromicSubstring("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE")); 
