function paliandromPermutation(str) {
//check if str is null
  if (!str) return false;

  str = str.toLowerCase();
  //create a set for uniqueness
  const letterMap = new Set();
  for (const letter of str) {
    if (letter !== ' ') {
    
    //if set conatains letter then delete it from set
      if (letterMap.has(letter)) letterMap.delete(letter);
      //else add the letter to set
      else letterMap.add(letter);
    }
  }
  //returns true is size is <= 1
  return letterMap.size <= 1;
}

console.log(paliandromPermutation('malayalam'))
