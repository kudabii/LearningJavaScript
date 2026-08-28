//PRIMITIVE DATA TYPES 

//String
const name = 'Khalid';
console.log(typeof name);
//result = string

const age = 12;
console.log(typeof age);
//result = number

const isAboy = true;
//boolean(True/False)
//Null

const car = null;

// Undefined - let is used for this example cause not defining a  const would result in an  error 
let test;

//Symbol
const sym = Symbol();
console.log(typeof sym);


//REFERENCE DATA TYPES - all result should be 'object'
//Array
const hobbies = ['movies', 'music', 'swimming'];
console.log(typeof hobbies);

//object literal
const address = {
  city: 'Ikotun',
  state: 'Lagos'
}
console.log(typeof address);


//Dates
const today = new Date();
console.log(today);
console.log(typeof today);