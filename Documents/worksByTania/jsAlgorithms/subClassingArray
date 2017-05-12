//Subclassing Array using prototype chain injection
//source : http://perfectionkills.com/how-ecmascript-5-still-does-not-allow-to-subclass-an-array/#wrappers_prototype_chain_injection

function SubArray(){
var arr = [ ];
arr.push.apply(arr,arguments);
arr.__proto__ = SubArray.prototype;
return arr;
}

SubArray.prototype = new Array;
SubArray.prototype.last = function(){
return this[this.length-1];
};

var sub = new SubArray(1,2,3);
console.log(sub instanceof SubArray);
console.log(sub instanceof Array);

/*
	here prototype chain of 
  new SubArray()
    |
  SubArray.prototype
  	|
  Array.prototype
    |
  Object.prototype
    |
  null
*/
//Verifying the above method inherits the special behaviour of array as well
//hence here, array length mumeric property relation is there though its not very ideal to rely on non standard __proto__ 
var ar = ['x','y','z'];
console.log(ar.length)
ar.length = 2;
console.log(ar);

ar.length = 4;
ar.push('z');
console.log(ar);

console.log(ar.join());
console.log(ar.concat('f'));
ar.length = 0;
console.log(ar);
