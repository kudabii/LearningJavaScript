let val;

const today = new Date();

let birthday = new Date('08-08-2001 04:30:00');
//dates can also be written in different formats

birthday = new Date("August 08 2001");
birthday = new Date("08/08/2001");

//--------------------------------------------------------

val = today.getMonth(); //gets the month number of a date, but remember its 0-indexed
val = today.getDate(); //this gets the day of the month
val = today.getDay(); //this gives a numerical representation of the day of the week - 0 = sunday
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();

//---------------------------------------------------------

birthday.setMonth(2); //it changes the month to the index of the year / 2 - the index for March
birthday.setDate(12); //changes the date
birthday.setFullYear(2004);



console.log(val);
console.log(birthday);
