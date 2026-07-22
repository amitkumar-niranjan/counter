function countVowels(str){
    let count=0
    for(i=0;i<str.length-1;i++){
        if( str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello World"))
