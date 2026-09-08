// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// this adds the text node in the h2
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
//you have to call out the old heading and the parent before carrying on the replacing
const cardAction = document.querySelector('.card-action'); //-- card-action is the parent div that the heading is in

// Replace the old heading with the new heading 
cardAction.replaceChild(newHeading, oldHeading);

//-----------------------------------------------------------------------------------------
// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

//--------------------------------------------------------------------------------
//CLAASSES AND ATTRIBUTE
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;

console.log(val);

