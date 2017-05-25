//first occurence of non repeated char
//using charAt

var myString = 'the quick brown fox jumps then quickly blow air';
function firstOccurrenceOfNonRepeatedChar(str) {
  var strLength = str.length,
    j,
    char,
    i;
    
    for(i=0;i<strLength;i++){
    	char = str.charAt(i);
      if(str.indexOf(char) ==i && str.indexOf(char,i+1)==-1)
      	return char;
    }

}

//using associative array (its not guarantted loop will execute in same order)
console.log(firstOccurrenceOfNonRepeatedChar(myString))


function firstOccurrenceOfNonRepeatedChar1(str) {
  var strLength = str.length,
    j,
    charCount = {},
    i, char = '';
  for (i = 0; i < strLength; i++) {
    char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  for (j in charCount) {
    if (charCount[j] === 1)
      return j;
  }
}

console.log(firstOccurrenceOfNonRepeatedChar1(myString))


