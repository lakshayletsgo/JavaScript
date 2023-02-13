// Alert, Confirm and Prompt

alert("You are in Lakshay's Browser")//This will give a alert message

let a = prompt("Enter your age: ");//This will take input from user and stores in a 

a = Number.parseInt(a); //This is used to change the type
alert("The Type you entered is "+typeof a);
document.write(a);//This will write text of a in the page
let b = prompt("Enter the type","Here") //In this Here will be set as default value in the prompt

let c=  confirm("Are you sure to do this")//It is like a yes/no prompt
if(c){
    document.write("You have Allowed me to write anything")
}else{
    document.write("You have NOT allowed to write")
}

// Yeh kam use hai, Yeh purana wale feel dete hai