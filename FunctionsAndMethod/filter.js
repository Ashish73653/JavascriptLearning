const numbers = [1,2,3,4,5,6]
const evenNumbers = numbers.filter((num)=>{
    return num%2==0
})
console.log(evenNumbers)

const evennum = numbers.filter(function(num){
    return num%2==0;
})
console.log(evennum)


const doubledEvens = numbers.filter(num => num%2==0).map(num => num*2);
console.log(doubledEvens)