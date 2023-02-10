// String Methods
let name = "Lakshay";
console.log(name.length)

console.log(name.toUpperCase())  //LAKSHAY
console.log(name.toLowerCase()) //lakshay

console.log(name.slice(2,4)) //ks
console.log(name.slice(2)) //kshay

console.log(name.replace("Lak","Har"))//Harshay  
// The First String should be there in the given string 

let friend2 = "Rahul";
console.log(name.concat(" is a friend of "+friend2+" Thank You"))

let trimer = "     lakshay    "
console.log(trimer);
console.log(trimer.trim());

for(let i=0;i<name.length;i++){
    console.log(name[i]);
}
