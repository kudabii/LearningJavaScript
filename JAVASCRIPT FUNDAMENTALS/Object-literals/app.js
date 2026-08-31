const person = {
  firstName: "khalid",
  lastName: 'Okorejior',
  age:25,
  email: 'kudabik@gmail.com',
  hobbies: ['music', 'COD' ],
  address:{
    city:'Lugbe',
    state:'Abj'
  },
  birthYear: function(){
    return 2001;
  }
   
};

let val;
val = person;

//To get a specific value from the object
val = person.firstName; //OR
val = person['firstName'];
val = person.age;   
val = person.hobbies[2];   
val = person.address.state;  
val = person.birthYear();


console.log(val);