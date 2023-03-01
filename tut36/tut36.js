// setTimeout and setInterval
document.write("Hello")
let a = setTimeout(function(){
    alert("This is inside the function")
},2000) //This will show an alert after 2 sec
 
clearTimeout(a) //This will delete the timer and the timer will not be excuted
console.log(a) //1      It is the timerId

const sum = (c,d) => {
    console.log("running",(c+d))
    return c+d;
}
setTimeout(sum,10000,3,2) 

setInterval(() => {
    alert("Hello");
}, 2000); //This will run the function after the time again and again