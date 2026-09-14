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

//INHERITING CONSTRUCTORS
function Business(name, balance, phone, category){
  client.call(this, name, balance);
  this.phone = phone;
  this.category = category;
}
//INHERITING PROTOTYPES
Business.prototype = Object.create(client.prototype);

const business = new Business ('Khalid', 20000000, 9055045008, 'Finance');

//Returning the constructor as Business
Business.prototype.constructor = Business;


console.log(business);
console.log(business.clientInfo());
