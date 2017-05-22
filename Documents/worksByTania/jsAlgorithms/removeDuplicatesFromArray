//more efficient way using hash table but it works fine only if key returns primitive

function removeDuplicates(a, key) {
  var seen = {};

  //here key returns primitive so hash table works fine
  return a.filter(function(item) {
    var k = key(item);
    return seen.hasOwnProperty(k) ? false : (seen[k] = true);
  });
}

a = [
  [1, 2, 3],
  [1, 3, 3],
  [1, 2, 3]
];
//a useful key is JSON.stringify which  will  remove objects that are physically different but look the same
b = removeDuplicates(a, JSON.stringify)

console.log(b);

//if key is not primitive. then we should do linear search

function removeDuplicateUsingLinearSearch(a, key) {
  var index = [];
  return a.filter(function(item) {
    var k = key(item);
    return index.indexof(k) ? false : index.push(k);
  });

}

// or

// in es6

function removeDuplicateUsingEs6(a, key) {
  var seen = {};
  return a.filter(item => {
    var k = key(item);
    return seen.has(k) ? false : seen.add(k);
  });
}
//----------------------------------------------------------------------
// using set in ES6 (best and easiest way)

function removeDuplicateUsingSet1(a) {
  return Array.from(new Set(a));
}
console.log("using set...")
removeDuplicateUsingSet1([
  [1, 2, 3],
  [1, 2, 3],
  [1, 4, 3]
]);

// -or-

let removeDuplicateUsingSet2 = a => [...new Set(a)];

console.log(removeDuplicateUsingSet2([
    [1, 2, 3],
    [1, 2, 3],
    [1, 4, 3]
  ]))
  //---------------------------------------
  //using jquery
$(document).ready(function() {
  $.removeDuplicates = function(a) {
    return $.grep(a, function(item, pos) {
      return $.inArray(item, a) === pos;
    });
  };
  a = [
    [1, 2, 3],
    [1, 3, 3],
    [1, 2, 3]
  ];
  console.log(removeDuplicates(a, JSON.stringify));
});

//------------------------------------------------
//the above ways doesnt have good performance bz function calls are expensive
//for that replace filter with a loop and get rid of other functions

(function() {
  function removeDuplicates_fast(a) {
    var seen = {},
        out = [],
       len = a.length,
       j = 0,item;
    for (var i = 0; i < len; i++) {
       item = a[i];
      if (seen[item] !== 1) {
        seen[item] = 1;
        out[j++] = item;
      }
    }
    return out;
  }

  removeDuplicates_fast([
    [1, 2, 3],
    [1, 3, 3],
    [1, 2, 3]
  ]);
})();

//-------------------------------------------------------------------

//unique reduce while keeping the order

var names = ["Mike", "Matt", "Nancy", "Adam", "Jenny", "Nancy", "Carl"];

var uniqueArray = names.reduce(function(a, item) {
  if (a.indexOf(item) < 0) a.push(item);
  return a;
}, []);
console.log("using reduce");
console.log(uniqueArray);

// Faster unique array wigth sorting

var uniqueArray1 = names.slice() //slice makes copy of array before sorting
  .sort(function(a, b) {
    return a > b;
  })
  .reduce(function(a, item) {
    //a.slice(-1)[0] is the last item in the array without														 removing it
    if (a.slice(-1)[0] !== item) a.push(item);
    return a;
  }, []); //this empty array becomes the starting value of a

console.log(uniqueArray1);
