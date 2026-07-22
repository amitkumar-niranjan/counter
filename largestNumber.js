function largestNumber(arr){
    let temp=0;
    for(i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i] < arr[j]){
               temp = arr[j];
               arr[j] = arr[i];
               arr[i] = temp;
               
            }
        }
    }
    return arr[0];
}
arr = [10,5,100,40];
console.log(largestNumber(arr), arr)
