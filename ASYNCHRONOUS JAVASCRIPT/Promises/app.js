//promises represent when a function is completed or failed
//resolve is for when the function/task is successful
//reject is for when the function/task failed

const applyDiscount = new Promise(function(resolve, reject){
  const discount = false;

  if (discount){
    resolve ('Discount Applied' )
  } else {
    reject ("No discount applied...")
  }

});

//resolve is attached to .then to access the value 
//reject is attached to .catch to access the value 

applyDiscount

.then(function(result){
  console.log(result);
})

.catch(function(result){
  console.log(result)
});