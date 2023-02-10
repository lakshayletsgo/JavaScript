// Practice Questions
const line = "My name is lakshay, I am feeling great today";
const expression = "great";
console.log(`The expression ${expression} ${line.includes(expression)? "is there":"is not there"} in the line`)
// In this we have used .includes function which returns true or false 

// To extract the amount from the given string
// The amount is $1000

let str = "The amount is $1000";
let amount = str.slice(14);
console.log(amount)


// A string is immutable i.e. it can't be changed  