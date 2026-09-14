//OBJECT consTRUcTor

function client(name, balance){
  this.name = name;
  this.balance = balance;
  this.membership =function(){
    let tier;
    if(this.balance >= 1000){
      tier ='Gold membership'
    } else if (this.balance < 699){
      tier = "Platinum membership"
    } else {
      tier = "NO MEMBERSHIP, PLEASE SUBSCRIBE"
    } 
    return tier;
  };
}


const person = new client('Khalid', 1000);
const person2 = new client('Imoukhuede', 300);



console.log(person);
console.log(person.membership() );
console.log(person2.membership() );