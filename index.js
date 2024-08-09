// Practice JS 

//var, let and const

var x = 5;

const pi = 3.14;
console.log("The value of pi is " + pi);

let firstName = "Areeba";
let lastName = "Imran";

//string concatenation

console.log("Name: " + firstName + "" + lastName);

//Arithmetic operators

let num1 = 6;
let num2 = 7;
console.log("Sum " + num1 + num2);
console.log("Division " + num1 / num2);

//Assignment Operators

let num3 = +num1;
console.log("NEW NUMBER: " + num3);

//logical operators

let op1 = false;
let op2 = true;
console.log(op1 || op2);
console.log(op1 && op2);


// Template Literals

console.log(`Hey, I am ${firstName} ${lastName}`);

// Objects 

const book = {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    year: 1937,
};

console.log(book);
console.log(book.title);
console.log(book["author"]);

// IF/ELSE Condition

function calculateGrade(marks) {

    let grade;
    if (marks >= 90) {
        grade = 'A';
    } else if (marks >= 80) {
        grade = 'B';
    } else if (marks >= 70) {
        grade = 'C';
    } else if (marks >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    return grade;
}

const studentMarks = 85;
const studentGrade = calculateGrade(studentMarks);

console.log("Marks:", studentMarks);
console.log("Grade:", studentGrade);

//Switch

let dayNumber = 4;
let dayName;

switch (dayNumber) {
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    case 7:
        dayName = 'Sunday';
        break;
    default:
        dayName = 'Invalid day number';
}

console.log("Day Number: " + dayNumber + " - Day Name: " + dayName);

//For loop example

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let person = {
    name: "Ali",
    age: 25,
    city: "Lahore"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}

// Function to check if a number is even
function isEven(number) {
    if (number % 2 === 0) {
        return true; 
    } else {
        return false;
    }
}

console.log(isEven(4)); 
console.log(isEven(7));

// Arrays

let fruits = ["Apple", "Banana", "Cherry"];

// Add a new element to the end of the array
fruits.push("Orange");
console.log(fruits); 

// Remove the last element from the array
fruits.pop();
//console.log( fruits); 

// Iterate over the array 
for (let fruit of fruits) {
    console.log(fruit);
}
// Mutating Example

// Define an array
let numbers = [1, 2, 3, 4, 5];
// Mutate the array by adding a new element
numbers.push(6);

console.log(numbers);

//Map it can create a new array by performing a function and does not change the original array

const numbers1=[2,4,6,8,10];
const numbers2=numbers1.map(myFunction);

function myFunction(value,index,array){
    return value*4;
}

console.log(numbers2);

// Use filter() to create a new array with only the even numbers

let numbers_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers_arr.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]











