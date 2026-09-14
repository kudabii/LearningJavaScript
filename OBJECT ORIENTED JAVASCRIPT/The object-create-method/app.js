//Object create
const client = {
  getBalance : function(){
    return `Hello ${this.name} your balance is ${this.balance}`;
  },
  withdraw : function(amount){
    return this.balance -= amount;
  },
  deposit : function(amount){
    return this.balance += amount;
  }
};  

//create a new object and give balance 
const person = Object.create(client);
//ATTACH THE PROPERTIES 
person.name = "Khalid";
person.balance = 2000;

 
//////OR -- instead of creating the object and reattaching the properties seperately...

const khalid = Object.create(client, {
  name: {value : 'Imoukhuede'},
  balance: {value : 6000}
});


console.log(person.withdraw(200));
console.log(person.getBalance());
console.log(person.deposit(2000));
console.log(person.getBalance());

console.log('---------------------------');
console.log(khalid.getBalance());
console.log(khalid.withdraw(200));