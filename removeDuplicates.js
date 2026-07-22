function removeDuplicates(arr){
    for(i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i] == arr[j]){
                arr.splice(j, 1); // Remove duplicate
                j--;              // Check the new element at index j
            }
        }
    }
    return arr;
}
arr = [1,2,2,3,4,4,5]
console.log(removeDuplicates(arr))
