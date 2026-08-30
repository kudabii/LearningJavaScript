//create some arrays
const numbers = [43, 23, 32,44, 42 ,1];
const numbers2 = new Array(22, 32, 42,1, 3,2);
const fruits = ['Apple', 'watermelon', 'mango', 'dates'];
const mixed = [22, 'hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

//how to get the length of the array
val = numbers.length;


//how to check if uts an array
val = Array.isArray(numbers);

//to get a single vaue from the array
val = numbers[3]; //the number si the index of the arrays which is 44
val = numbers[0];


//insert into an array - arrays could be edited
numbers[2] = 100; 

//find the index pf value
val = numbers.indexOf(42); //it will give you the index of the number


//Mutating (editing/modifying) Arrays 
//Adding to the end of an array
numbers.push(392);

//Adding to the begining of the array
numbers.unshift();

//Removing from the end of the array
fruits.pop();

//Removing from the beginning of the array
numbers.shift();

//splice (to remove, add or replace items in an array)
numbers.splice(1,3); //this means to start at the 1 index and remove 3 items

//an array could be reversed
fruits.reverse();


//concatenate an array
val = numbers.concat(numbers2);

//sorting an array
val = fruits.sort();
sort = numbers2.sort(); //the result wont be right,it wont be arranged from lowest to highest value, to do that use the "COMPARE FUNCTION"

val = numbers2.sort(function(x, y){
  return x - y;
});  //frm lowest to highest

val = numbers2.sort(function(x, y){
  return y - x ;
}); ///from hghest to lowest

 

console.log(numbers);
console.log(val);
console.log(fruits);
console.log(sort);