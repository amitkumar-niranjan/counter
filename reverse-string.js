// 2 - Reverse String

let s="";
function reversestr(str){
    for(i=str.length-1; i>=0; i--){
        s+=str[i]
    }
    return s;
}

console.log(reversestr("react"));
