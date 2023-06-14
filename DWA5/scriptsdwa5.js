// scripts.js

// Starting program state 
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
result.innerText = "No calculation performed";

// Dividing numbers result in a whole number 
form.addEventListener("submit", (event) => { event.preventDefault();
const entries = new FormData(event.target);
const { dividend, divider } = Object.fromEntries(entries);
const answer = dividend / divider; 
if (answer % 1 === 0) { // check if result is a whole number 
result.innerText = answer; } 
});

// Validation when values are missing 
form.addEventListener("submit", (event) => { event.preventDefault();
const entries = new FormData(event.target);
const { dividend, divider } = Object.fromEntries(entries); 
if (dividend === "" || divider === "") {
// check if any input is empty 
result.innerText = "Division not performed. Both values are required in inputs. Try again"; } 
else { // execute division if both inputs are not empty 
const answer = dividend / divider;
if (answer % 1 === 0) { // check if result is a whole number 
result.innerText = answer; }
 }
 }
 );

// An invalid division should log an error in the console 
form.addEventListener("submit", (event) => { event.preventDefault();
const entries = new FormData(event.target);
const { dividend, divider } = Object.fromEntries(entries);
if (divider == 0 || isNaN(dividend) || isNaN(divider) ) {
// check if divider is 0 or if any input is NaN ,TRYING TO GET IT TO CANCEL OUT /NEGATIVES
result.innerText = "Division not performed. Invalid number provided. Try again";
console.error(new Error("Invalid division"));
// log error in console 
} 
else { // execute division if inputs are valid 
const answer = dividend / divider; if (answer % 1 === 0) {// check if result is a whole number 
result.innerText = answer; } 
// else { // unresolved scenario of dividing numbers resulting in a decimal number 
// result.innerText = "Division not performed. Result is a decimal. Try again"; } 
} });

// Providing anything that is not a number should crash the program 
form.addEventListener("submit", (event) => { event.preventDefault();
const entries = new FormData(event.target);
const { dividend, divider } = Object.fromEntries(entries);
if (isNaN(dividend) || isNaN(divider)) { // check if any input is NaN 
document.body.innerHTML = "Something critical went wrong. Please reload the page";
console.error(new Error("TypeError: Invalid input")); // log error in console 
}
else if (divider == 0 || (dividend<0) || (divider<0)) { // check if divider is 0 OR DIVIDER/DENT <0 
result.innerText = "Division not performed. Invalid number provided. Try again";
console.error(new Error("ZeroDivisionError: Attempt to divide by zero OR negative number used"));
// log error in console 
} 
else { // execute division if inputs are valid 
const answer = dividend / divider;
if (answer % 1 === 0) {
// check if result is a whole number 
result.innerText = answer; } 
else { // unresolved scenario of dividing numbers resulting in a decimal number 
result.innerText = Math.floor(dividend / divider); } } });