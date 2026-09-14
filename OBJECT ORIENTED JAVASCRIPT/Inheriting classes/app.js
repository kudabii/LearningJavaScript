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
    getBalance(){
      return this.balance;
    }
}

//when inheriting a class we use the 'extends'

class factory extends client {
  constructor(name, balance, phone, category ){

    //to access the constructor properties thats already in the parent clas i.e; name and balance, we use super()
    super (name, balance);
    this.phone = phone;
    this.category = category;
  }
      clientInfo(){
        return(`Name: ${this.name}, Membership Package: ${this.membership() } Phone: ${this.phone}, Category: ${this.category} `);
  }
  static welcome (){
    return 'Welcome to Kudabii ventures';
  }
}


const factoryInfo = new factory('Kudabii ventures: ', 10000000, 90550545008, 'Finance');
console.log(factoryInfo.clientInfo());
console.log(factory.welcome());