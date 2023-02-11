// Array Practice 
let arr = [3,25,2,1,3]
let a;

do{
 a = prompt("Enter the array")
a = Number.parseInt(a);
arr.push(a);}while(a!=0)

console.log(arr)


// Filter an array

let arr = [2,10,20,30,41,24,10]
let n = arr.filter((x)=>{
    return x%10==0;
})
console.log(n);
