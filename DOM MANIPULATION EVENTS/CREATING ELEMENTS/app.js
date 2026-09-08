// Create element from scratch
const li  = document.createElement('li');

// Add class to the element
li.className = 'collection-item';

// Add id to the element
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// you can add a text node inside the li and append it (to put something inside it)
li.appendChild(document.createTextNode('Hello World'));


//------------------------------------------------------------------------------------------------

// Create new link element
const link = document.createElement('a');

// Add classes to the link that was created
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

//-------------------------------------------------------------------------------------

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);