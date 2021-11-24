let myBody = document.body
console.log(myBody.firstElementChild)
console.log(myBody.lastElementChild)
let exo4 = myBody.firstElementChild.childNodes
console.log(exo4)
let li = document.getElementsByTagName('li')[0]
let li_suivant = li.nextElementSibling
console.log(li_suivant)
console.log(li_suivant.previousElementSibling)