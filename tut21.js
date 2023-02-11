// It generates a random number and take a number from the user and checks whether it is equal to or greater than or less than the generator random number.

let r = Math.random()*100;
r = Number.parseInt(r);
console.log(r);
let c = 0;
let a;
do{
 a = prompt("enter a number")
a = Number.parseInt(a);
c++;
if(a>r){
    console.log("You have entered greater number")
}else{
    console.log("You have entered smaller number")
}
}while(a!=r)

alert("Your score is "+c);