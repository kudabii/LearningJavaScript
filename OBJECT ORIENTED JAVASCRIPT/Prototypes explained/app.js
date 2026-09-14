function client(name, balance){
  this.name = name;
  this.balance = balance;
}


client.prototype.membership = function(){
  let name;
  if (this.balance > 999){
    name = 'Gold Membership'
  } else if (this.balance > 500 && this.balance <= 999 ){
    name = 'Platinum Membership'
  } else if (this.balance > 199 && this.balance <=49  ){
    name = 'Normal: Brokie, upgrade your package'
  } else {
    name = "Not a member"
  };
  return name;
}
client.prototype.withdraw = function(amount){
  this.balance -= amount;
}
client.prototype.deposit = function(amount){
  this.balance += amount;
}
client.prototype.clientInfo = function(){
  return(`Name: ${this.name}, Membership Package: ${this.membership() }`)
}

const person = new client('Khalid', 200);
const person2 = new client('Imoukhuede', 1500);
const person3 = new client('Jade', 700);

person.deposit(800);
console.log(person.clientInfo());
console.log(person);

console.log('-----------------------');

person2.withdraw(800);
console.log(person2.clientInfo());
console.log(person2);

console.log('----------------------');

person3.withdraw(800);
console.log(person3.clientInfo());
console.log(person3);

