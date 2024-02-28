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

/*
const firstName = "Lucas";
const occupation = "Computer Science student";
const organization = "Santa Catarina Federal University";
const birthYear = 2005, currentYear = 2025;
const myAge = currentYear - birthYear;

const lucas = "I'm " + firstName + ", a " + myAge + " year old " + occupation + " at " + organization + ".";
console.log(lucas);

const lucasNew = `I'm ${firstName}, a ${myAge} year old ${occupation} at ${organization}.`;
console.log(lucasNew);

const complicatedLongString = "With double quotes, \n\
you need to use the 'backslash + n + backslash' \n\
special character to write strings with multiple lines.";

const simpleLongString = `With backticks (crase em português), 
you can write strings with multiple lines freely.`;
*/


// 📌__________ Taking Decisions: if / else Statements __________📌

/*
const yourName = "Lucas";
const yourAge = 14;

if (yourAge >= 18) {
  console.log(`${yourName}, you can already start taking driving lessons.`);
} else {
  const yearsLeft = 18 - yourAge;
  console.log(`${yourName}, you still have ${yearsLeft} years left before you can start taking driving lessons.`);
}

const birthYear = 2000;
let century
if (birthYear < 2000) {
  century = "You were born in the 20th century."
} else {
  century = "You were born in the 21st century."
}
console.log(century);
*/

// 📌__________ Type Conversion and Coercion __________📌

/*
// Type conversion 👇
let inputYear = '1991';
inputYear = Number(inputYear);
console.log(inputYear + 18);

console.log(Number('Lucas'));
console.log(typeof NaN);

const sixteenHundred = 1600;
console.log(String(sixteenHundred));

// Type coercion 👇
console.log("I am " + 18 + " years old.");

console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "2");

let n = '1' + 1;
n--;
console.log(n);

console.log(2 + 3 + 4 + '5');
console.log('10' - '4' - '3' - 2 + '5');
*/

// 📌__________ Truthy and Falsy Values __________📌

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

// const money = 0;
const money = 10;
if (money) {
  console.log("Don't spend it all!");
} else {
  console.log("Get a job!");
}

let height = 0;
if (height) {
  console.log("Height has already been defined.");
} else if (height === 0) {
  console.log("The value of 'height' is set to 0.")
} else {
  console.log("Height is undefined.");
}
