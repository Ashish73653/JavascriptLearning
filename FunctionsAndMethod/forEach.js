let num = [1,2,3,4,5,6,7,8]

num.forEach(function(num){
    console.log(num+2)
})

num.forEach(function(currVal, index, num){
    console.log(`CurrVal is: ${currVal}, index is: ${index}`)
})


num.forEach((num) => {
    console.log(num*num)
});

const names = ["Ashish", "Karan", "Tushar"]

names.forEach(function(names){
    console.log(names)
})

names.forEach((name)=> console.log(`Hello, ${name}!`));