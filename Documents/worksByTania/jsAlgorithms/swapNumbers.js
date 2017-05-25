//Using Es6 (destructing Assignmnet array matching)
var a = 5,b=8;
[a,b] = [b,a];
console.log('a ' +a + ' ' + 'b '+ b);

//Swap two number

function swapNo(a,b){
b = b-a;
a = a+b;
b = a-b
return 'a ' +a + ' ' + 'b '+ b;
}

console.log(swapNo(2,7));

//using tmp var
function swapUsingTmp(a,b){
var tmp;
tmp = a;
a = b;
b = tmp;
return 'a ' +a + ' ' + 'b '+ b;
}

console.log(swapUsingTmp("hi","there"))

//Using XOR swap algorithm
//works with any data type but Xor doesnt produce correct values for  non integer numeric values bcz it converts to 32 bit integers

function SwapXor(a,b){
a = a ^ b;
b = a ^ b;
a = a ^ b;
return 'a ' +a + ' ' + 'b '+ b;
}
console.log(SwapXor(2,7));
console.log(SwapXor("hi","there")); //doesnt give correct result a= 0 b=0



//one liner Swap but its not good performance wise since it creates an array during execution
var a = 5,b=8;
b = [a,a=b][0];
console.log('a ' +a + ' ' + 'b '+ b);
