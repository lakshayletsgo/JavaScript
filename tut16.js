// Array Methods
// toString     join    pop     push    shift
let a = [2,3,4,5,6]

let x = a.toString(); //x is a string
console.log(x,typeof x);

let b = a.join(" and ")
console.log(b, typeof b);

let r = a.pop(); //pop returns the popped out element
console.log(a,r);

let p = a.push(34); //push returns the new array length
console.log(a,p);

let s = a.shift();//Removes the first element and returns it
console.log(s,a)

let u = a.unshift(2);//Add the element to the begning and returns the length of new array
console.log(a,u);