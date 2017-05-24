//bracket match

/*Given a string that consists of brackets, write a function bracketMatch that takes a bracket string as an input and returns the minimum number of brackets you’d need to add to the input in order to make it correctly matched.
Time Complexity: O(N), where N is the length of text. We go through every character of text and for every character we carry out a constant number of steps.

Space Complexity: O(1) since we only used a constant amount of space throughout the algorithm.
*/

function bracketMatch(str) {
  var strLength = str.length,
    i,
    difCounter = 0,
    ans = 0


  for (i = 0; i < strLength; i++) {
    //take diff btw '(' and  ')'
    if (str[i] === '(') {
      difCounter += 1;
    } else if (str[i] === ')') {
      difCounter -= 1;
    }

    if (difCounter < 0) {
      //when ')' comes 1st counteer is incremented and answer is updated
      difCounter += 1;
      ans += 1;

    }
  }
  //ans holds the number of '(' required to corect and diffCounter holds the count of ')' 
  return ans + difCounter

}

console.log(bracketMatch("()))("))
