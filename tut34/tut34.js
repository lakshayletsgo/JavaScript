//Insert Adjacent HTML/Text/Element

let first =  document.getElementById("outer");

first.insertAdjacentHTML("beforeend","<div id='test'>beforeend</div>") //This will add the html before the end of the outer container

first.insertAdjacentHTML("beforebegin","<div id='test'>beforebegin</div>") //This will add the html outside the outer container

first.insertAdjacentHTML("afterend","<div id='test'>afterend</div>") //This will add the html after the end of the outer container

first.insertAdjacentHTML("afterbegin","<div id='test'>afterbegin</div>") //This will add the html just after the begining of the outer container

first.remove(); //This will remove the entire outer container