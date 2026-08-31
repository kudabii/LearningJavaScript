//Functions are blocks of code that can be defined and called at a later time or sometimes be defined and called at the same time 
function greet(){
  console.log('Hello');
}//this is just defining the function and not calling it out yet

greet();
//this is calling out the function



function saySomething(){
  return 'Something';
}
console.log(saySomething());
//returning the string doesn't log it out on the console so you have to 'console.log(greet());' wrap the function


//---------------------------------------------------------------------------------------------------------------------
function greet(firstName = "Khalid", lastName = " Okorejior"){
  return "Hello " + firstName + lastName;
}    
console.log(greet()); 




//FUNCTIONS EXPRESSIONS - basically putting a function in a variable
const square = function(x){
  return x + x
};
console.log(square(7));



//IIFEs - IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - this is to declare a function and run at the same time
(function(){
  console.log("IIFEs ran...");
})(); //the () has to be added for it to work

(function(name = "Khalid"){
  console.log("Hello " + name );
})();



//when a function is stored in an object, its called a METHOD..it is the same as a regular function but just shows the function belongs to something
const person = {
  add: function(){
    console.log('Add person...');
  },
  edit: function(id){
    console.log(`Edit person ${id}`)
  },
  delete: function(){
    console.log('Delete person')
  }
} 

person.add();
person.edit('name');
person.delete();

