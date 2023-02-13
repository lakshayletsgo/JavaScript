// Practice Sets

let age = prompt("Enter Your Age");
age = Number.parseInt(age);
if(age>=18){
    alert("You can drive and your age is"+age);
}else {
    alert("You can't drive and your age is"+age)
}



let loop= true;
while(loop){
    
let age = prompt("Enter Your Age");
age = Number.parseInt(age);
if(age<0){
    console.error("You have to enter a legal age")
}
if(age>=18){
    alert("You can drive and your age is"+age);
}else {
    alert("You can't drive and your age is"+age)
}
loop = confirm("You have to re-enter")
}
