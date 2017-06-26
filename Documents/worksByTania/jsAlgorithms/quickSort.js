function quickSort(arr,left,right){
var i = left,
j=right,
pivotIdx = Math.floor((left + right)/2),temp;

var pivot = arr[pivotIdx];

while( i <= j){
	while(arr[i] < pivot)
  	i++;
   while(arr[j] > pivot)
   	j--;
  if(i <= j){
  	temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  
  if(i < right){
  	quickSort(arr,i, right);
  }
  if( j > left){
  	quickSort(arr,left,j)
  }
}
return arr;
}

var arr = [26,1,5,9,1,3,0,1,3,4,6];
console.log(quickSort(arr,0,arr.length-1))
