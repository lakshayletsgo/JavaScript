let marks ={
    harry:90,
    rohan:89,
    rahul:98,
}
for(let a in marks){
    console.log("Marks of "+ a+" are "+marks[a])
}

const mean=(a,b,c,d)=>{
    return (a+b+c+d)/4;
}

let x= prompt("Enter First Number")
x = Number.parseInt(x)
let y= prompt("Enter Second Number")
y = Number.parseInt(y)
let z= prompt("Enter Third Number")
z = Number.parseInt(z)
let a= prompt("Enter Fourth Number")
a = Number.parseInt(a)

console.log("Mean is "+mean(x,y,z,a));