let marks = [85,97,44,37,76,60]

let avg=0
for (const mark of marks){
    avg = avg + mark;
}
avg = avg/(marks.length)
console.log("Average is:"+avg)


let arr = [250,645,300,900,50]
let i = 0;
for(const num of arr){
    arr[i] = arr[i]*0.1;
    i++;
}
console.log(arr)