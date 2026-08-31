/*CONVERSIONS OF DATA TYPES 
---------------------------------------

 converting data to string */

let val;
val = 5;

// 1. wrapping the value you want to convert in a 'String()' 
val = String(5); 
val = String(4+4);
val = String(true); //Boolean to string 
val = String(new Date()); //Date to string
val = String([1,2,3,4]); //Array to string


//2. Using the toString() function
val = (5).toString(); 
val= (true).toString();



/* CONVRTING A STRING TO NUMBER
1. Wrapping the value you want to convert in (Number();) */

val = Number('5'); //converting a string to a number
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1,2,3]); // line 29,30,31 would result in NaN = Not A Number




//Output or Result
console.log(val);
console.log(typeof val);
console.log(val.length); //length only works on strings
console.log(val.toFixed()); //this only works with numbers and it shows how many numbers to keep after the decimal points e.g ".toFixed(2) ... 5.69"