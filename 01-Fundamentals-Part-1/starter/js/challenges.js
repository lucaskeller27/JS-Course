
// 📌__________ Challenge no. 1 __________📌

// const massMark = 78, heightMark = 1.69, massJohn = 92, heightJohn = 1.95;
const massMark = 95, heightMark = 1.88, massJohn = 85, heightJohn = 1.76;


const bmiMark = (massMark / (heightMark ** 2));
const bmiJohn = (massJohn / (heightJohn ** 2));

console.log("Mark's BMI: " + bmiMark, "\nJohn's BMI: " + bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;

if (markHigherBMI === true) {
    console.log("Mark has a higher BMI than John");
} else {
    console.log("John has a higher BMI than Mark");
}
