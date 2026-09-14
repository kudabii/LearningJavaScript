//EVENT BUBBLING -- this is when an event on an element also triggers on its parents, all the way to the document root; it travels upwards after being clicked

/* document.querySelector('.card-title').addEventListener('click', function(){
  console.log('card-title');
});

document.querySelector('.card-content').addEventListener('click', function(){
  console.log('card-content');
});

document.querySelector('.card').addEventListener('click', function(){
  console.log('card');
});

document.querySelector('.col').addEventListener('click', function(){
  console.log('col');
});
*/

//EVENT DELEGATION -- this is just attaching one handler to its parent...instead of bubbling ou can put one listener and let the clic bubbles up to it


document.body.addEventListener('click', deleteItem);

function deleteItem(e){
//  if(e.target.className === 'fa fa-remove'){
//  }
  if(e.target.parentElement.classList.contains('delete-item')){
   console.log('delete-item');
   e.target.parentElement.parentElement.remove();
  }
}