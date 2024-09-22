let str = prompt("Enter any string:")
let n = str.length
let count = 0;
const vowel = (str) => {
    for(let i=0;i<n;i++){
        if(str.charAt(i)=='a' || str.charAt(i)=='e' || str.charAt(i)=='i' || str.charAt(i)=='o' || str.charAt(i)=='u'){
            count++;
        }
    }
    return count
};
console.log(vowel(str))