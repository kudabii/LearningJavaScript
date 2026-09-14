//set local storage 
//localStorage.setItem('name', 'khalid');
//localStorage.setItem('age', '91');

//set session storage 
//sessionStorage.setItem('name', 'khalid');

//how to remove from local storage
//localStorage.removeItem('name');

//how to get from local storage
//const name = localStorage.getItem('name');
//const age = localStorage.getItem('age');
//console.log(name, age);


document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value;
  console.log(task);
  
//to be able to log in multiple items , the if loop would be used and allso the JSON.parse to convert arrays to strings


  let tasks;
  if(localStorage.getItem('tasks') === null){
      tasks = [];
  } else{
      tasks = JSON.parse(this.localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('Task added');

  e.preventDefault(); 
}); 


//in local storage, you can only save strings,so ypu convert arrays to string when adding multiple items to the local storage
