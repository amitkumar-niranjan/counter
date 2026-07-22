function isPalindrome(str){
    let s = "";
    for(i=str.length-1; i>=0; i--){
        s+=str[i];
    }
    if(s === str) return true;
    else return false
}

console.log(isPalindrome("madam"))
