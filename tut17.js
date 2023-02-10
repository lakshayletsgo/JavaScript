// Some more Array Methods
let num = [9,8,7,6,5,4,3,2,1,0]
console.log(num.length)

// delete num[0];
// console.log(num);
// console.log(num.length);

let num2 = [3,2,5,2,5,7];
let newArray = num.concat(num2);//It creates a new array of the concanated(joined) elements, It doesn't change anything in earlier arrays
// We can concat more than one array
let num3  = [5,36,8,2,1,5];
let newArray2 = num.concat(num2,num3)
console.log(newArray)
console.log(newArray2)

num2.sort();//It sorts the original array
console.log(num2);

let compare=(a,b)=>{
    return b-a;
}
num3.sort(compare);//It sorts the array in descending order 
                    //To sorts the array in ascending order return a-b
console.log(num3);

num3.reverse();//It will reverse the original array
console.log(num3)


let num4 = [98,97,96,95,94,93];
num4.splice(2,2,34,34,34);//Returns the removed element 
//(index of the removal, numbers of elements to be removed, new elements that to be added)
console.log(num4)

let newNum4 = num4.slice(2);
console.log(newNum4);