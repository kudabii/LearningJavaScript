//TRAVERSING the DOM is like moving up and down in the dom

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

//childNode is a property that gives you all the direct children of an element as a NodeList
// this is for tring to get the child nodes -- children of the UL
val = list.childNodes; 
val = list.childNodes[0];
val = list.childNodes[0].nodeName; //result = text
val = list.childNodes[3].nodeType; 

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


// Get children element nodes -- can be used instead of child nodes which excludes the text node ((line breaks))
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';
// Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// First child
val = list.firstChild;
val = list.firstElementChild; //this would give you the first element instead of the 'text'

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);