/* 
if(something){
  do something
} else{
  do something else  
}
*/

const id = 100;

//Equal to comparison operator
if(id == 103){
  console.log('CORRECT');
} else{
  console.log('INCORRECT');
}


//'strictly equal to' in value and type i.e it mut be the exact value and data type(number, strings )
if(id === 103){
  console.log('CORRECT');
} else{
  console.log('INCORRECT');
}


//'strictly NOT equal to' in value and type i.e it mut be the exact value and data type(number, strings )
if(id !== 103){
  console.log('CORRECT');
} else{
  console.log('INCORRECT');
}

//this is to test if the variable has been assigned or given a value
if(typeof id !== 'undefined'){
  console.log(`The ID is ${id}`);
} else{
  console.log('NO ID');
}


//GREATER OR LESS THAN -- pretty basic
if(id > 200){
  console.log(`CORRECT`);
} else{
  console.log('INCORECT');
}

if(id < 200){
  console.log(`CORRECT`);
} else{
  console.log('INCORECT');
}


// ELSE IF
const color = 'orange';

if(color == 'yellow'){
  console.log('Color is red');
} else if (color == 'blue'){
  console.log('Color is blue');
} else{
  console.log('color is none of the above');
}


//LOGICAL OPERATORS -- this is for when you want to test for more than one thing

const name = 'khalid';
const age = 20;

if (age > 0 && age < 12){
  console.log(`${name} is a child`);
} else if(age >= 13 && age <=19 ){
  console.log(`${name} is a teenager`);
} else{
  console.log(`${name} is an adult`);
} 

//if you want to see if one is true you can use OR "||"
if (age < 16 || age > 65){
  console.log(`${name} can not run  in the race`);
} else {
  console.log(`${name} is registered for the race`);
};


//TERNARY OPERATOR -- its a shorthand of writing conditions
console.log(id === 100 ? 'Correct' : 'INCORRECT')
// ?  if this is true , :  else