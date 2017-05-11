//func to get all methods ina class,remove duplicates, and sort

//below eg Inherited or not, enumerable or not. All functions are included.
function getAllFuncs(obj) {
   var props = [];
   do {
   	props = props.concat(Object.getOwnPropertyNames(obj));
   }while(obj = Object.getPrototypeOf(obj));
   return Array.from(new Set(props.sort()));
   
}

console.log(getAllFuncs([1,2,3]));

class Myfun{
methodA(){}
methodB(){}
}
console.log(getAllFuncs(Myfun));

//this just gives only the member functions
var propertyNames = Object.getOwnPropertyNames(Myfun.prototype);
console.log(propertyNames)
