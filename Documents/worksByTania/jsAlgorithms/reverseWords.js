function reverseWords(str) {
  var strLength = str.length - 1,
    wordLen = 0,
    i, revArr = [];
  for (i = strLength; i >= 0; i--) {
      if (str[i] === ' ' || i === 0) {
        revArr.push(str.substr(i, wordLen + 1));
        wordLen = 0;
      } else
        wordLen++;
    
  }
  return revArr.join(' ');
}

console.log(reverseWords('1 2 3  '));

//--------builtin method----------------
function reverseWords1(str) {
  return str.split(' ').reverse().join(' ');
}

console.log(reverseWords1('my name is tania'));

//to reverse string in place
//using built in

function reverseWordsInPlace(str){
return str.split(' ').reverse('').join(' ').split('').reverse('').join('');
}
console.log(reverseWordsInPlace('my name is tania'));

//without built in

function reverseWordsInPlace1(str){
str = str.split('');
return reverseWords(str);
}
console.log(reverseWordsInPlace('my name is tania'));

