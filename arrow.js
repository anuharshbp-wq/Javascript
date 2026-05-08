const multiply = (a, b) => a * b;
console.log("multiplied value is",multiply(2,3))

const even =(a)=>a%2==0
console.log(even(2))

const square =(b)=>b*b
console.log("square is ",square(2))

const person = { firstName: "koshi", lastName: "kurian", age: 50 };
let { firstName, age } = person;
console.log("first name is",firstName);
console.log("age is",age);   

const colors=["red","bule","green"]
    const[first,second,thrid]=colors
        console.log("first value is",first)
        console.log("second value is" ,second)

const user={
    city:"kannur",
    state:"kerala"

}
const {city,state}=user
console.log("city is ",city)
console.log("state is ",state)