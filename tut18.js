let num = [3,2,4,6,5]

// for(let i=0;i<num.length;i++){
//     console.log(num[i])
// }

num.forEach((Element)=>{
    console.log(Element*Element)
})

let name = "Lakshay"
let arr = Array.from(name); //Conversion of a string to a array 
console.log(arr)

// For...of loop
for(let i of num){
    console.log(i);
}

// For...in loop
for(let item in num){
    console.log(item)
}
// It is similar to the objects for in loop just the keys are the index here