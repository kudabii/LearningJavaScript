//Loop is an instruction that repeats until a specific condition is reached ; FOR loops WHILE loop and DO WHILE loops
// var or let is used inside a for loop cause its going to keep changing

//FOR LOOP --- the first is the declaration of the variable , the second is the condition , the last is the increment of i
for(let i = 0; i <= 10; i++ ){
  if(i === 8){
    console.log("8 is my favorite number");
    continue; //meaning dont repeat the iteration,move on to the next
  }
  if(i === 5){
    console.log('Stop the loop');
    break; //meaning the loop ends
  }
  console.log(i);
}

//result is the counting of 0-10

//--------------------------------------------------------------
//WHILE and DO WHILE loop
let x = 0;
while(x < 17){
  console.log('Number ' + x);
  x++;
}

//DO WHILE
let count = 1;
do{
  console.log("Number " + count);
  count++;
}
while(count < 13);
//the do function would be ran no matter what whether or not the conditions in the while is met or not


//USING LOOP THROUGH ARRAYS
const cars = ["ford", 'Chevy', "toyota", 'nissan'];
for(let i = 0; i < cars.length; i++){
  console.log(cars[i]);
}

//the forEach function is a way to go through every item in an array one by one and do something with each of them

cars.forEach(function(car, index){
  console.log(`${index} : ${car} `);
});


/*
so basically instead of ;
  console.log(cars[0]);
  console.log(cars[1]);
  console.log(cars[2]);

  you can just use;

  cars.forEach(function(car){
    console.log(car);
  });
OR

  cars.forEach(car => console.log(car));

*/

//MAP == this is used to return somethng different/gives you a new array

const users = [
  {id: 1, name:"Khalid"},
  {id: 2, name:"Okorejior"},
  {id: 3, name:"Imoukhuede"},
  {id: 4, name:"Asekegbe"},
] 
const ids = users.map(function(user){
  return user.id;
});
//this is going to go through the array and return the id of each users

console.log(ids);


//FOR IN Loop -- hich is used for objects
const user = {
  firstName : 'Khalid',
  lastName : 'Okorejior',
  age : 21,
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);
};