let arr = [1,4,2,5,7,23,234,123];

let found = arr.find(ar => ar>2);
console.log(found)


let filt = arr.filter(ar=> ar>4)
console.log(filt)

const fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.splice(2,0,"Kiwi","pineapple")
console.log(fruits)

fruits.splice(2,3)
console.log(fruits)