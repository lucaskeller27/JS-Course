const jcomprendsPas = "J'fais pompe et traction, j'ai le tri' à Végéta";
// console.log(jcomprendsPas);

// 📌__________ Values and Variables __________📌

/*
let number = (40 + 8 + 23 - 10);
console.log(number);

let firstName = "Lucas";
console.log(firstName);

let PI = 3.1415;

let myCurrentUniversity = "UniSENAI";
let myNextUniversity = "UFSC";

// This ☝ is much more preferable than this:

let uni1 = "UniSENAI";
let uni2 = "UFSC";
*/

// 📌__________ Data Types __________📌

/*
let variable = true;
console.log(variable);

console.log(typeof variable);
console.log(typeof 23.5)

variable = 33;
console.log(typeof variable);

let film;
console.log(film);
console.log(typeof film);

film = "500 Days Of Summer";
console.log(film);
console.log(typeof film);

console.log(typeof null);
*/

// 📌__________ Declaring Variables __________📌

/*
let myAge = 18;
let currentYear = 2024;
let currentMonth = 8;
if (currentYear == 2024 && currentMonth >= 7) {
  myAge = 19;
}
console.log(myAge);

const birthYear = 2005;
*/

// 📌__________ Basic Operators __________📌

/*
// Mathematical operators

let currentYear = 2025;
const birthYearLucas = 2005;
const birthYearNoah = 2006;

const ageLucas = currentYear - birthYearLucas;
const ageNoah = currentYear - birthYearNoah;

// console.log(ageLucas, ageNoah);

const myNumber = 10;
// console.log(myNumber * 2, myNumber / 2, myNumber ** 2);

const firstName = "Lucas";
const surname = "Keller";
// console.log(firstName + " " + surname);

// console.log(typeof firstName + ", " + typeof myNumber);

// Assignment operators

let x = 66 + 33; // 99
x++; // 100
x += 100; // 200
x *= 5; // 1000
x /= 10; // 100
x--; // 99
// console.log(x);

// Comparison operators

const drinkingAge = 18;
console.log(ageLucas > ageNoah); // >, <, <=, >=
console.log(currentYear - 2005 > currentYear - 2006);
console.log(ageLucas >= drinkingAge);

const isAdult = ageLucas >= 18;
*/

// 📌__________ Operator Precedence __________📌

/*
let currentYear = 2024;
const birthYearLucas = 2005;
const birthYearNoah = 2006;

const ageLucas = currentYear - birthYearLucas;
const ageNoah = currentYear - birthYearNoah;

// console.log(currentYear - 2005 > currentYear - 2006);

let x, y;
x = y = 30;
console.log(x, y);

const averageAge = (ageLucas + ageNoah) / 2;
console.log(averageAge);
*/

// 📌__________ Strings and Template Literals __________📌

const firstName = "Lucas";
const job = "Computer Science student";
const uni = "Saint Catherine's University";
const birthYear = 2005, currentYear = 2025;
const myAge = currentYear - birthYear;

const lucas = "I'm " + firstName + ", a " + myAge + " year old " + job + " at " + uni + ".";
console.log(lucas);

