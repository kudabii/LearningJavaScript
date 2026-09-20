const sayHello1 = function(){
  console.log("Say Hello");
} 

//first off remove the function label, and then add an arrow '=>' after () and just before the {}
const sayHello = () => console.log("Say Hello");

sayHello();


//if you want to return something e.g
const sayBye1 = function(){
  return 'Bye bye';
}
console.log(sayBye1());


//one line return
const sayBye = () => 'Bye' ;
console.log(sayBye());


//returning object literals
const greeting = () => ({msg : 'Hey there'});
console.log(greeting());

//single parameters
const sayName = (name) => console.log(`Name : ${name} `);
sayName('Khalid');

//single parameters doesnt need to be written in a bracket
const sayName1 = name => console.log(`Name : ${name} `);
sayName1('Imoukhuede');


//more than one parameter should be wrapped in brackets
const fullName = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`)

fullName("Khalid", "Okorejior"); 

//using arrow functions as callbacks

const users = ['Nathan','JAvco','Mandy','Uriri'];
const nameLength = users.map(function(user){
  return user.length;
})

console.log(nameLength);


//using arrow functions now
const users1 = ['Nate','JAck','Man','Uri'];
const nameLength1 = users1.map((user1) => {
  return user1.length;
})

console.log(nameLength1);


//or you can even make it shorter
const users2 = ['Khalid','Imoukhuede','Okorejior','Mohammed'];
const nameLength2 = users2.map(user2 => user2.length);

console.log(nameLength2);
