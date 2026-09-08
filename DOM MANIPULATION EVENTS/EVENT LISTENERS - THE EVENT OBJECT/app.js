 // document.querySelector('.clear-tasks').addEventListener('click', functin());
//addEventListener takes in two values (1.) the actual event we want to listen for, (2.) an anonymous function//callback function -- what we add in here is what will happen after we click) (e)--is the event parameter

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
 // console.log('Clicked');

 let val;
 val = e;

 //Event target element
 val = e.target; //this gives the link element
 val = e.target.id; //would be blank cause there isnt one
 val = e.target.className; //would show the 3 classes associated with it
 val = e.target.classList; //this would bring a list of all the classes

 e.target.innerText = 'hello' //this changes the text in the button...

//Event type
val = e.type; //click

 console.log(val);
}

