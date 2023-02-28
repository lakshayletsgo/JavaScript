// Insertion in Js

// This will add another line written hello in it
let a = document.getElementsByTagName("div")[0]
// a.innerHTML  = a.innerHTML + "<h1>Hello</h1>"

// Both of them do the same work but below one is more useful as it is written in pure Js
let div = document.createElement("div")
div.innerHTML = '<h1>Hello</h1>'
// a.append(div)
// This will add the element at the end

a.prepend(div)
//This will add the element at the begining of the outer container i.e. it will make it its first child

a.before(div);
// This will add the element at the starting of the inner container and end of the outer container

a.after(div)
// This will add the element at the ending of the inner container and start of the outer container

a.replaceWith(div);
// This will replace the entire div container with the new container