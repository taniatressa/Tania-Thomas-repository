//algorithm to merge an array
function mergedArray(a, b) {
  var merged = [],
    aElem = a[0],
    bElem = b[0],
    i = 1,
    j = 1,
    aLength = a.length,
    bLength = b.length;
  if (aLength = 0) {
    return b;
  }
  if (bLength = 0) {
    return a;
  }

  while (aElem || bElem) {
    /* 
    if aElm or bElm exists we will insert to merged array
    (will go inside while loop)
     to insert: aElm exists and bElm doesn't exists
               or both exists and aElm < bElm
      this is the critical part of the example            
    */
    if((aElem && !bElem) || (aElem < bElem)){
    merged.push(aElem);
    aElem = a[i++];
    }else{
    merged.push(bElem);
    bElem = b[j++];
    }
  }
  return merged;
}


//using only loop 
function mergeAndRemoveDuplicates(a) {

  var seen = {}; //hash table
  var out = [];
  var j = 0;
  var len = a.length;
  for (var i = 0; i < len; i++) {
    var item = a[i];
    if (seen[item] !== 1) {
      seen[item] = 1;
      out[j++] = item;
    }
  }
  return out;
}

var array1 = ["tani", "kevin", 'mikayla'];
var array2 = ["marymol", 'amal', 'thommu', 'rose', 'tani', 'mikayla'];
var array3 = mergeAndRemoveDuplicates(mergedArray(array1,array2));
console.log(array3);

//using reduce


var mergeAndRemoveDuplicatesUsingReduce = mergedArray(array1,array2).reduce(function(a, item) {
  if (a.indexOf(item) < 0) a.push(item);
  return a;
}, []);
console.log("using reduce");
console.log(mergeAndRemoveDuplicatesUsingReduce);

//using reduce while keeping the order

var mergeAndRemoveDuplicatesUsingReduceInOrder = mergedArray(array1,array2).slice()
  .sort(function(a, b) {
    return a > b;
  })
  .reduce(function(a, item) {
    if (a.slice(-1)[0] !== item)
      a.push(item);
    return a;
  }, []);
console.log("using reduce keeping order");
console.log(mergeAndRemoveDuplicatesUsingReduceInOrder);

//Using es6

function mergeAndRemoveDuplicatesUsingEs61(a) {
  return Array.from(new Set(a));
}
console.log("Using es6");
console.log(mergeAndRemoveDuplicatesUsingEs61(mergedArray(array1,array2)));

//   -or-
let mergeAndRemoveDuplicatesUsingEs62 = a => [...new Set(a)];
let mergeArr = [...array1, ...array2]
console.log(mergeAndRemoveDuplicatesUsingEs62(mergeArr));

// using filter method..perfomance wise this way is not very good
function removeDuplicatesUsingFilter(a, key) {
  var seen = {};
  return a.filter(function(item) {
    var k = key(item);
    return seen.hasOwnProperty(k) ? false : (seen[k] = true);
  });

}
console.log("Using filter if key returns primitive");
console.log(removeDuplicatesUsingFilter(mergeArr, JSON.stringify));

//if key is not primitive
function removeDuplicatesUsingFilter1(a, key) {
  var index = [];
  return a.filter(function(item) {
    var k = key(item);
    return index.indexOf(k) ? false : index.push(k);
  });
}

console.log("Using filter if key not return primitive ");
console.log(removeDuplicatesUsingFilter1(mergeArr, JSON.stringify));
