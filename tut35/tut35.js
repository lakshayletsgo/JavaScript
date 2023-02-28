// Changing classes in HTML

let first = document.getElementById("first")
first.className = "yellow" //This will remove the earlier existing classes of the first and add a new class name yellow

first.classList //This will give the classes of the first

first.classList.remove("yellow")//This will remove the class name yellow 

first.classList.add("yellow")//This will add the class name yellow 

first.classList.toggle("yellow")//This will add the class name yellow if there is not there and if there is a class name red it will remove it 
// It is used to toggle in between things  