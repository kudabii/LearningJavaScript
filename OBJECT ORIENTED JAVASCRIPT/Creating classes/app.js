//Class -- when you create a class , you would have access to the constructor

class client {
  //access to the constructor
  constructor(name, balance){
    this.name = name;
    this.balance = balance;
  }
  membership(){
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
    clientInfo(){
        return(`Name: ${this.name}, Membership Package: ${this.membership() }`)
    }
    withdraw(amount){
        this.balance -= amount;
    }
    getBalance(){
      return this.balance;
    }
}

const khalid = new client('Khalid', 2000);
console.log(khalid);