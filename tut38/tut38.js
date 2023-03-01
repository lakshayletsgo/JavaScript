let x = function(e){
    console.log(e);
    console.log(e.target+e.clientX+e.clientY); //e.clientX gives the x cordinate of the button                                       e.clientY gives the y coordinte of the button
    alert("Hello World1!")
} //This is just an alert function assigned to the x

let y  = function(e){
    console.log(e);
    alert("Hello World2!")
} //This is just another alert function assigned to the y

btn.addEventListener('click',x) //This adds a listener to the button 

btn.addEventListener('click',y) //This also adds a listener to the button

let b = prompt("Enter your age");
 if(b>=18){
    btn.removeEventListener('click',x) //This removes a listener 
 }


