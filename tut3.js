// Difference in var,const and let
// Var is not used in ECMAScript(The New Js)
// Var is a globally declared variable
// Let is a block dedicated variable
const author = "Lakshay";
// author = "Lakshay2";     //Error(You can't change a const variable)
// const lakshay;           //Error(Have to give the value)
console.log(author)
let  a = "Outside the block";
// let a = "Lakshay";       //This will throw error
a = "Lakshay";              //This will not throw error
{
    let a="Inside the block"
    console.log(a); 
}
console.log(a); 