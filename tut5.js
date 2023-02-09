// Q1 = Create a Variable of String Type and Try to add a number to it 
const name = "Lakshay";
const a = 1;
console.log(name+1);

// Q2= Use Typeof operator to find the datatype of the string in last question
console.log(typeof (name+1));

// Q3 = Create a const object in JavaScript. Can you change it to hold a number later?
const a2 ={
    name2:"Lakshay",
    Section: "B",
    Age:19,
}
// a2 = 65;

// Q4 = Try to add a new key to the const object in Problem3. Were we able to do it?
a2['Marks'] = 98;
a2['name2'] = "Lakshay2"
console.log(a2);

// Q5 = Write a Js Program to create a word-meaning dictionary of 5 words
const dict ={
    yakka:"Pure Hardwork",
    atarxia:"a state of freedom from emotional distubance"
}
console.log(dict.yakka);
console.log(dict['yakka']) //Both are acceptable

