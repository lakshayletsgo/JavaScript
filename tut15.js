// Arrays
let marks_class12 = [91,98,23,45];
console.log(marks_class12)
console.log(marks_class12[0])
console.log(marks_class12[1])
console.log(marks_class12[2])
console.log(marks_class12[3])


let marks_class11 = [91,98,23,45,"Not Given",null];
console.log("Length of the array is "+marks_class11.length)

let example = [10,20,30,40,50]
example[5] = 60;//Adding a value
example[2] = 69;//Changing the value
console.log(example)
console.log(typeof example)

// Printing a array using for loop
for(let i=0;i<example.length;i++){
    console.log(example[i])
}
