//document.getElementsByClassName
const items = document.getElementsByClassName('collection-item');
items[2].textContent = 'Hello ALL';
console.log(items); 

//we can attach it to specific elements rather than doing it globally
const listItems = document.querySelector('ul').getElementsByClassName('collection-name');


//getElementByTagName -- theyre very similar
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';

//convert html collection into array
lis = Array.from(lis);
lis.reverse;
console.log(lis);

lis.forEach(function(li){
  console.log(li);
  li.textContent = 'Hello';  //this is to edit the content of the li
}) 


//document.querySelectorAll
//nodeliist is returned by querySelectorAll, it can hold any node type((elements, texts, comments))
//has forEach built in, dont need to convert to an array
const items2 = document.querySelectorAll('ul.collection li.collection-item');

console.log(items2);

items2.forEach(function(item2, index){
  console.log(item2)
  item2.textContent = `${index} : Hello`
})


const liOdd = document.querySelectorAll('li:nth-child(odd');
const liEven = document.querySelectorAll('li:nth-child(even');

liOdd.forEach(function(li){
  li.style.background = '#ccc';
})

//using the for loop -- can work in a collecton without even converting to an array
for(let i = 0; i<liEven.length; i++){
  liEven[i].style.background = 'blue';
}