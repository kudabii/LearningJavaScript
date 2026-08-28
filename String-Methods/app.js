const firstName = 'khalid';
const lastName = 'okorejior';
const age = 32;

let val;
val = firstName + lastName;

//Concatenation
val = firstName + ' ' + lastName;

//Append
val = 'Brad ';
val += 'Jaja';
val = 'Hello, my name is ' + firstName + ' and i am ' + age ;


// Escaping when using a lot of double quotes while concatenating or just in a string
val = 'That\'s awesome, i can\'t wait ';

//String Property
val = firstName.length; //counts the characters in a string
val = firstName.concat(' ' + lastName);
val = firstName.toLowerCase;
val = firstName.toUpperCase;


console.log(val);