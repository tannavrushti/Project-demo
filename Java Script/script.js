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
let num2 = 5; 6
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

// concating
let cartoons = ["chhota bheem", "Doremon", "Shinchain"];
let Movies = ["Krish", "Jholmaal"];

let Tvshow = cartoons.concat(Movies);
console.log(Tvshow);

//splice method
let arr = [1, 2, 3, 4, 5, 6, 7];

arr.splice(2, 2, 201, 202);
console.log(arr);

arr.splice(2, 0, 301);
console.log(arr);

arr.splice(3, 1);
console.log(arr);

arr.splice(3, 1, 201);
console.log(arr);

//filter method
let nums = [11, 23, 35, 48, 59, 62];

let evennums = nums.filter((val) => {
    return val % 2 === 0;
});

console.log(evennums);

//for each
let num = [2, 3, 5, 6, 7];

num.forEach((num) => {
    console.log(num * num);

});

//practice work

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        body.classList.remove("light");
        body.classList.add("dark");
    }
    else {
        currMode = "light";
        body.classList.remove("dark");
        body.classList.add("light");
    }
    console.log(currMode);

});
//array - object example
const users = [
    { id: 1, name: 'Alice', role: 'admin' },
    { id: 2, name: 'Bob', role: 'user' },
    { id: 3, name: 'Charlie', role: 'user' },
];
const user = users

console.log(user[2].role)
//class & Object example
class ToyotaCar {
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }

    setBrand(brand) {
        this.brandName = brand;
    }
}
let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");
let Kia = new ToyotaCar();
Kia.setBrand("Kia");

//callback function
function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}
//callback hell
getData(1, () => {
    getData(2, () => {
    });
});


