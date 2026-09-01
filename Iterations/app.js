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
