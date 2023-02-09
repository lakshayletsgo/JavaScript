// This will throw an error if run in the VS Code
let x = prompt("Enter your age: "); // This will make a pop out window
x = Number.parseInt(x); //This will convert string to int 
if(x>18){
    alert("You are underage");
}
// If-else if-else Statement works same as other languages

switch(x){
    case 10: alert("Your age is 10");
            break;
    case 20: alert("Your age is 20");
            break;
    default: alert("Enter valid age");
}

// This is ternary operator in which it will check if x is greater than 20 or not, If it is true then it will return first value else second value, This is a shortcut
console.log("This is", x>20?"true":"false")