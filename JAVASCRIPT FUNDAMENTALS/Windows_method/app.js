//confirm
if(confirm('Are you sure?')){
  console.log("Deleted...");
} else{
  console.log("Nothing happens");
} 

//retrieve the height and width of the window
let height, width;

height = window.outerHeight;
width = window.outerWidth;

height = window.innerHeight;
width = window.innerWidth;

console.log(height);
console.log(width);

// location
let urllocation = window.location;

console.log(urllocation);
console.log(urllocation.host);
console.log(urllocation.hostname);
console.log(urllocation.port);