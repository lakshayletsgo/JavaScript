// Primitive DataTypes
// N - Null
// N - Number
// S - Symbol
// S - String
// B - Boolean
// B - BigInt 
// U - undefined

let a = null;
let b = 45;
let c = Symbol("This is a Symbol");
let d = "Lakshay";
let e = true;
let f = BigInt("876");
let g = undefined;
console.log(a,b,c,d,e,f,g);
// console.log(a)
console.log(typeof c);

// Objects (These are non-primitive datatypes)

const items={
    "Lakshay":true,
    "XYZ":67,
    "Name3":609,
    "Name4":undefined,
}
console.log(items["Lakshay"])
