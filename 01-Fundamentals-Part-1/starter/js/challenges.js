
// 📌__________ Challenge no. 1 __________📌

// const massMark = 78, heightMark = 1.69, massJohn = 92, heightJohn = 1.95;
// const massMark = 95, heightMark = 1.88, massJohn = 85, heightJohn = 1.76;

// const bmiMark = (massMark / (heightMark ** 2));
// const bmiJohn = (massJohn / (heightJohn ** 2));

// console.log("Mark's BMI: " + bmiMark, "\nJohn's BMI: " + bmiJohn);

// const markHigherBMI = bmiMark > bmiJohn;

// if (markHigherBMI === true) {
//     console.log("Mark has a higher BMI than John");
// } else {
//     console.log("John has a higher BMI than Mark");
// }

// 📌__________ Challenge no. 2 __________📌

const massMark = 78, heightMark = 1.69, massJohn = 92, heightJohn = 1.95;
// const massMark = 95, heightMark = 1.88, massJohn = 85, heightJohn = 1.76;

const bmiMark = Number((massMark / (heightMark ** 2)).toFixed(1));
const bmiJohn = Number((massJohn / (heightJohn ** 2)).toFixed(1));

// console.log("Mark's BMI: " + bmiMark, "\nJohn's BMI: " + bmiJohn);

// bmiMark = Number((bmiMark).toFixed(1)); 
// bmiJohn = Number((bmiJohn).toFixed(1)); 
// Here, "Number()" is converting the result of the toFixed() method from a string back to a number

if (bmiMark > bmiJohn) {
    console.log(`Mark (${bmiMark}) has a higher BMI than John (${bmiJohn}).`);
} else if (bmiMark === bmiJohn) {
    console.log(`Both have the same BMI (${bmiJohn}).`);
} else {
    console.log(`John (${bmiJohn}) has a higher BMI than Mark (${bmiMark}).`);
}

