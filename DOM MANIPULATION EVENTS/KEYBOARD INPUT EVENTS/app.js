const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');


//this is to clear input
//taskInput.value = '';

//SUBMIT
form.addEventListener('submit', runEvent);

//--events we can run in the input not the form

//KEYDOWN --  only fires off when start typing -- put your keydown?, KEYUP does the same thing but in opposite-when you release the key
taskInput.addEventListener('keydown', runEvent);
//taskInput.addEventListener('keyup', runEvent);
//taskInput.addEventListener('keypress', runEvent);
taskInput.addEventListener('focus', runEvent);
taskInput.addEventListener('blur', runEvent);
taskInput.addEventListener('cut', runEvent);
taskInput.addEventListener('paste', runEvent);


function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  console.log(taskInput.value);

  console.log(e.target.value);//this is going to log in everything you type

  heading.innerText = e.target.value;

}