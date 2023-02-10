// Maps, ForEach and Filters 
let num = [3,4,8,1,3,5];
// let a = num.map((value,index,num)=>{
//     console.log(value, index, num)
//     return value+1
// })
// console.log(a);


// It will filter the values which are greater than 4
let b = num.filter((a)=>{
    return a>4;
})
console.log(b)


// It will add first two number than the next number to the sum of previous two numbers
let arr3 = [3,7,1,2,5,2];

const function_add =(h1,h2)=>{
    return h1+h2;
}
let newarr3 = arr3.reduce(function_add)
console.log(newarr3)