//console demo
console.log("Hello, World! This is a demo script.");

//varible demo
let name = "tanna";
const age = 23;
console.log("Name:", name);
console.log("Age:", age);

//data type demo
let a = 10; //number
let b = "Hello"; //string
let c = true; //boolean
let d; //undefined
console.log(a, b, c, d);

//if -else demo
let marks = 70;
if (marks >= 35) {
    console.log("pass");
} else {
    console.log("fail");
}

//arithmatic operation demo
let num1 = 10;
let num2 = 5;
console.log(num1 + num2);

//assignment operation demo
let x = 20;
x = x + 2;
console.log(x);

//loop demo
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//array demo
let cars = ["BMW", "Audi", "Toyota"];
console.log(cars[0]);
console.log(cars.length);

//function demo
function demo() {
    console.log("Welcome to the JS demo!");

}
demo();

//object demo
let student = {
    name: "Twins",
    age: 22,
    grade: "A",
    course: "MCA"
};
console.log(student.grade);

//calculate sum of 1 to 100
let sum = 0;
let n = 100;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log("Sum of 1 to 100 is:", sum);

// while loop
let i = 1;
while (i <= 5) {
    console.log("Twins");
    i++;
}

//prompt msg
let gamenum = 25;
let usernum = prompt("Guess the number :");

while (usernum != gamenum) {
    usernum = prompt("you entered wrong number , guess again:");

}
console.log("Congratulations! You guessed the  right number .");

//for of loop
let items = [250, 300, 350, 400, 450];

let v = 0;
for (let val of items) {
    let offer = val / 10;
    items[v] = items[v] - offer;
    console.log(`value after offer =${items[v]}`);
    v++;
}

//arrow function
const arrowSum = (a, b) => {
    console.log(4 + 8);
}

// multiplication
const arrowmult = (a, b) => {
    console.log(a * b);
}


