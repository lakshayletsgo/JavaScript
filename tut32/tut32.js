// Attributes and its usage
let first = document.getElementById("first");
let a = first.getAttribute("class");
console.log(a);
// It will give the class name of element having id first

console.log(first.hasAttribute("class")); // It will check whether there is a attribute having name class
console.log(first.hasAttribute("name"));  //It will give a false value as there is no name name class 

console.log(first.getAttribute("hidden"))
first.setAttribute("hidden","true") //This will make a attribute name hidden and set it true

console.log(first.getAttribute("hidden"))

first.setAttribute("class","name class");   //space deke ham do ya usse jada class de skte hai 

first.removeAttribute("class") //This will remove the class attribute

console.log(first.dataset) //We will usually use the custom attribute by this method i.e  data-name 
console.log(first.dataset.name)
console.log(first.dataset.game)