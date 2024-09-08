let num = prompt("Enter any number")
if(num%5==0) console.log("Number is divisible by 5.")
else console.log("Number not divisible by 5.")


let marks = prompt("Enter your marks:")
if(marks>=80 && marks<=100){
    console.log("Grade is A")
}else if(marks>=70 && marks<=89){
    console.log("Grade is B")
}else if(marks>=60 && marks<=69){
    console.log("Grade is C")
}else if(marks>=50 && marks<=59){
    console.log("Grade is D")
}else{
    console.log("Grade is F")
}