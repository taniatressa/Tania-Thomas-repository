//check if a string is permutation of other string

const sort = str => [...str].sort().join('');

function checkPermutation(str1,str2){
if(!str1 || !str2 || str1.length !== str2.length)
	return false;
 return sort(str1) === sort(str2);
 
}
console.log(checkPermutation('malayalam','malayalam'));
