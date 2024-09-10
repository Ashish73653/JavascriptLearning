let fullname = prompt("Enter your full name:")
let arr = fullname.split(" ")

let n = arr.length
let username = ""
for(let i=0;i<n;i++){
    username = username+arr[i];
};
let len = fullname.length
console.log("@"+username+len)