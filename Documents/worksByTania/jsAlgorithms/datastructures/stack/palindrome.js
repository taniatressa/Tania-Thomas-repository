function palindrome(str) {
  var letters = []; //stack
  var rword = "";
//put letters to stack
  for (var i = 0; i < str.length; i++) {
    letters.push(str[i]);
  }
//pop off stack in reverse order
  for (var j = 0; j < letters.length; i++) {
    rword += letters.pop();
  }

  if (str === rword) {
    console.log("palindrome");
  } else {
    console.log("not palindrome")
  }

}

palindrome("racecar")
