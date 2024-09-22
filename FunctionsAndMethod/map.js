const numbers = [1,2,3,4,5,6]

const doubled = numbers.map(function(numbers){
    return numbers*2
})
console.log(doubled);

numbers.forEach((nums)=> console.log(nums*2))

const squares = numbers.map((num)=>num*num)
console.log(squares)


const users = [
    {name: "Alice", age: 35},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35}
];

const userNames = users.map((user) => user.age);
console.log(userNames)

const fruits = ["apple", "banana", "mango"]
const fruitIndex = fruits.map((fruit,idx,arr)=>{
    return `Fruit is: ${fruit}, index is: ${idx}, Original array is: ${arr}`
});
console.log(fruitIndex)