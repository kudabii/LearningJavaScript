// var, let, const

var name = "Khalid";
console.log(name);

name = 'Imoukhuede';
console.log(name);

//var and let could be reassigned, while const can not
//the only characters that could be in a variable ; letters, numbers, _, $
//variables can't start with numbers, 


//result would show 'error'


//multi word vars
var firstName // camelcase
var first_Name // underscore
var FirstName // pascal case


//const stands for 'Constant' - meaning it can't change [can't be reassigned] and also it must be assigned or declared

const lastName = "okorejior";
console.log(lastName);


//const value can be changed but not reassigned...

const person = {
  name: "Khalid",
  age: 99
}

person.name = "jacob";
person.age = 32;

console.log(name);

//name would be changed to "jacob"