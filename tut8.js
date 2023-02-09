// For Loops 
// They work the same as in other languages

let a = 10;
for(let i=0;i<a;i++){
    console.log(i+1);

}
let obj ={
    lakshay: 98,
    harsh:93,
    xyz:12,
}

// For in loop
for(let a in obj){
    console.log("Marks of"+a+" are "+obj[a]);
}

// For of loop
// This only works on arrays or strings
for(let b of "Lakshay")
{
    console.log(b);
}
