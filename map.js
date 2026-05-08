const b=[1,2,3,4]
const double=b.map(num=>num*2)
console.log(double)


const salary = [100, 300, 500];
const bonus = salary.map(sal => sal + 1000);
console.log(bonus);


const a = [2, 4, 6];
const square = a.map(num => num * num);
console.log(square);



const names = ["anu", "harsh", "leo"];
const upper = names.map(na => na.toUpperCase());
console.log(upper);


const number = [5, 12, 8, 130, 44];
const bigNumberss = number.filter(num => num % 2 ==0);
console.log(bigNumberss)


const numbers = [5, 12, 8, 130, 44];
const bigNumber = numbers.filter(num => num % 2 !=0);
console.log(bigNumber)


const numberss = [5, 12, 8, 130, 44];
const bigNumbers = numberss.filter(num => num >10);
console.log(bigNumbers)


const user = { name: 'Alice', age: 25 };
const { name, age } = user; 
console.log(name);


