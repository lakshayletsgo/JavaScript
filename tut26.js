// Parents and siblings in DOM
// $0 is the selected html tag 
// $0 se ham usse call kar skte hai 
// $1 hai usse pehle wala element
// Body is next or right sibling of head
// Head is previous or left sibling of body 

console.log(document.body.firstChild)//This will give the first element in body tag.
//It will also include spaces toh usse bachna hoga.

console.log(document.body.lastChild)//This will give the last element in body tag

console.log(document.body.childNodes)//This will the list of all the child nodes

// This will give body 
a = document.body.firstChild;
console.log(a.parentNode);
console.log(a.parentElement);//This will only return something if parent is an element orthwise it will return null value