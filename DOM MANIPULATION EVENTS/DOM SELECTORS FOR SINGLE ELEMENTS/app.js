//TYPES OF SELECTORS
//SINGLE ELEMENT SELECTORS AND MULTIPLE ELEMENT SELECTORS
//document.getElementById()

console.log(document.getElementById('task-title'));

//get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

//we can also change styling
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
/*
console.log(document.getElementById('task-title').style.display = 'none');
this would make something disappear
*/


//changing of content should be done primarily with css but CAN also be done with javascript
taskTitle.textContent = 'TASK LIST';
taskTitle.innerText = 'MY TASK';
taskTitle .innerHTML = '<span style = "color:red"> TASK LIST </span>'; //this is to insert a chunk of html 


// document.querySelector() -- more powerful cause you dont have to select things by Id, you can select anything even put any CSS selector here

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));
document.querySelector('li').style.color = 'red';
//only one of the Li changed colors cause this is a single element selector

//you can also target subclasses or nested elements
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'blue';
document.querySelector('li:nth-child(3)').style.color = 'orange';
document.querySelector('li:nth-child(odd)').style.background = '#ccc'
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4'