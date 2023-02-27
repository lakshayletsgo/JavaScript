// InnerHtml , OuterHtml and Other Properties

console.log(document.getElementsByTagName('span'))
// This will return the element

console.dir(document.getElementsByTagName('span'))
// This will return the element in object format and it will show its properties

console.log(document.body.firstChild.nodeName);
//This will give the name of the tag of the first child of body

console.log(document.body.firstElementChild.nodeName);
//This will give the name of the tag of the first child of body

first.innerHtml
// This will give the inside material of the element having id first

first.innerHtml = "<i>Hey this is a innerHtml of first<i>"
// This will overwrite what is writen in the first element

first.outerHtml
// This will give the outside material of the element having id first and the complete tag

first.outerHtml = "<div>Hey this is a outerHtml of first<div>"
// This will overwrite what is writen in the first element

document.body.firstElementChild.data 
// This will give the data of the firstElementChild of the body

document.body.firstElementChild.nodeValue
// This will perform the same thing

console.log(document.body.textContent)
// This will give the entire text content of the body

