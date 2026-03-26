//exercise 1

class Account {
    constructor(login,email) {

        this.login = login;
        this.email = email;
    }
    getInfo() {
        return `login:${this.login}, email:${this.email}`;
}
}
const mango = new Account("mango21San","mangocdje2@gmail.com");
// console.log(mango.getInfo());
console.log(mango);

//exercise 2

class User{
    constructor(name,age,followers){
        this.name = name
        this.age = age
        this.followers = followers
    }
 getInfo(){
   return `User ${this.name} is ${this.age} years old and he has ${this.followers} followers`
    }
}

const mango2 = new User("Mango",2,20);

mango2.getInfo(); 
console.log(mango2);

const poly = new User("Poly",54,249);

poly.getInfo();
console.log(poly);


   //exercise 3

class Storage{
    constructor(items=[]){
        this.items = items
    }
    getItems(){
        return this.items
    }
    addItems(newItem){
        this.items.push(newItem)
    }
    removeItems(removeItem){
        const minusItem = this.items.indexOf(removeItem)

        if(minusItem !== -1){
            this.items.splice(removeItem,1)
        }
    }
}
const storage = new Storage([
  'Нанітоіди',
  'Пролонгер',
  'Залізні жупи',
  'Антигравітатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItems('Дроїд');
console.table(storage); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItems('Пролонгер');
console.table(storage); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]


//exercise 4

// Геттер value - повертає поточне значення поля _value
// Метод append(str) - отримує параметр str (рядок) і додає його в кінець _value
// Метод prepend(str) - отримує параметр str (рядок) і додає його на початок _value
// Метод pad(str) - отримує параметр str (рядок) і додає його на початок і в кінець _value
class StringBuilder{
    constructor(item){
        this.item=item
    }
   
    value(){
        return this.item
    }

    append(str){
    this.item.push(str)
    }

    prepend(str){
        this.item.unshift(str)
    }

    pad(str) {
        this.item
        .push(str)
        .unshift(str)
    }
}
const builder = new StringBuilder('.');

builder.append('^');
console.log(builder); // '.^'

builder.prepend('^');
console.log(builder); // '^.^'

builder.pad('=');
console.log(builder); // '=^.^='