const car = {
    brand: "Toyota",
    start: function(){
        return `${this.brand} is starting...`;
    }
};
console.log(car.start());


const person = {
    name: "bob",
    greet(){
        return `Hello, ${this.name}!`;
    }
};
console.log(person.greet());