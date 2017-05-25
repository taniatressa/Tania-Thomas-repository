//ways to set counter using static var


//closure way (ideal way)

var uniqueId = (function() {
  var id = 0;
  return function() {
    return id++;
  }
})();

console.log(uniqueId());
console.log(uniqueId());

//-------------------------------------------------------------
//Using the following trick, we can easily simulate static variables in Javascript
function increaseCount() {
  //checking if the static var is iniatlized
  if (typeof increaseCount.myCounter == 'undefined') {
    //if not
    increaseCount.myCounter = 0;

  }
  console.log(increaseCount.myCounter++);
}
increaseCount()
increaseCount()
increaseCount()
//---------------------------------------

//Classical way
function Person() {
  if (Person.count == undefined) {
    Person.count = 1;
  } else {
    Person.count++;
  }
  console.log(Person.count)
}
console.log(new Person());
console.log(new Person());
//-----------------------------------------------------
//demontrating static var,private and public var
function MyClass() {
  var privateVar = "foo";
  this.publicVar = "bar";
  this.publicMethod = function() {
    console.log(this.privateVar);
  }
}
//instance method will be available to all instances but stored once in memory
MyClass.prototype.publicMethod = function() {
  console.log(this.publicVar);
}
MyClass.staticProperty = "baz"
