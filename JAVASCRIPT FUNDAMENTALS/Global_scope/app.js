//GLOBAL SCOPE -- this is a variable created outside any function or block
var a = 1;
let b = 2;
const c = 3;
console.log('Global scope:  ', a, b, c);

//FUNCTION SCOPE- this is a variable crated inside any function, it belongs to that function...if u console.log the variable outside the function, it would show an error
function test(){
  var a = 4;
  let b = 5;
  const c = 6;
  console.log("Function scope:", a, b, c)
};
test();



//block-level scope -- this is a variable inside a {}.it can only be 'console.log"ged in that {}
if(true){
  var a = 4;
  let b = 5;
  const c = 6;
  console.log("If scope:", a,b,c);
}

//LET and CONST - block scoped while VAR - function scoped