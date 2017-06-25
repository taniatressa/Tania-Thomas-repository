//es6 doesnt have union,difference,subset,intersection

function mySet() {
  var collection = [];
  //to check the presence of a value
  this.has = function(value) {
      return (collection.indexOf(value) !== -1);
    }
    //return values

  this.values = function() {
      return collection;
    }
    //add a value
  this.add = function(value) {
    if (!this.has(value)) {
      collection.push(value);
      return true;
    }
    return false;
  }

  //remove a value
  this.remove = function(value) {
    if (this.has(value)) {
      collection.splice(collection.indexOf(value), 1);
      return true;
    }
    return false;
  }

  //size of set

  this.size = function() {
    return collection.length;
  }

  //return union of two set

  this.union = function(otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function(e) {
      unionSet.add(e);
    });
    secondSet.forWach(function(e) {
      unionSet.add(e);
    });
    return unionSet
  }

  //return common values from two sets
  this.intersection = function(otherSet) {
      var intersectionSet = new mySet();
      var firstSet = this.values();
      firstSet.forEach(function(e) {
        if (otherSet.has(e)) {
          intersectionSet.add(e);
        }
      });
      return intersectionSet;
    }
    //return difference btw sets

  this.difference = function(otherSet) {
      var differenceSet = new mySet();
      var firstSet = this.values();
      firstSet.forEach(function(e) {
        if (!otherSet.has(e)) {
          differenceSet.add(e);
        }
      });
      return differenceSet;
    }
    //check if new set is subset

  this.subSet = function(otherSet) {
    var subSet = new mySet();
    var firstSet = this.values();
    firstSet.every(function(e) {
      return otherSet.has(e)
    });
    return subSet;
  }

}

var setA = new mySet();  
var setB = new mySet();  
setA.add("a");  
setB.add("b");  
setB.add("c");  
setB.add("a");  
setB.add("d"); 

console.log(setA.subSet(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

//es6

var setC = new Set();  
var setD = new Set();  
setC.add("a");  
setD.add("b");  
setD.add("c");  
setD.add("a");  
setD.add("d");  
console.log(setD.values())
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d"));
