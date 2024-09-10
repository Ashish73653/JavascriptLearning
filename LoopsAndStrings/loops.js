let sum = 0;
for(let i=1;i<=5;i++){
    sum+=1;
}
console.log("Sum:",sum)

let num = 2;
while(num<=10){
    console.log(num);
    num+=2;
}

let userInput;
do{
    userInput = prompt("Enter 'yes' to exit:");
} while (userInput != "yes");


// for...of loop
const colors = ["red","green","blue"];
for(const color of colors){
    console.log(color);
}

const message = "Hello"
for(const char of message){
    console.log(char);
}


// for..in loop
const person = {
    name: "Alice",
    age: 23,
    city: "New York"
};
for(const key in person){
    console.log(`${key}: ${person[key]}`);
}

const numbers = [10,20,30];
for(const index in numbers){
    console.log(`Index: ${index}, Value: ${numbers[index]}`);
}