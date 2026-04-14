// //exercise 1

// class Account {
//     constructor(login,email) {

//         this.login = login;
//         this.email = email;
//     }
//     getInfo() {
//         return `login:${this.login}, email:${this.email}`;
// }
// }
// const mango = new Account("mango21San","mangocdje2@gmail.com");
// // console.log(mango.getInfo());
// console.log(mango);

// //exercise 2

// class User{
//     constructor(name,age,followers){
//         this.name = name
//         this.age = age
//         this.followers = followers
//     }
//  getInfo(){
//    return `User ${this.name} is ${this.age} years old and he has ${this.followers} followers`
//     }
// }

// const mango2 = new User("Mango",2,20);

// mango2.getInfo(); 
// console.log(mango2);

// const poly = new User("Poly",54,249);

// poly.getInfo();
// console.log(poly);


//    //exercise 3

// class Storage{
//     constructor(items=[]){
//         this.items = items
//     }
//     getItems(){
//         return this.items
//     }
//     addItems(newItem){
//         this.items.push(newItem)
//     }
//     removeItems(removeItem){
//         const minusItem = this.items.indexOf(removeItem)

//         if(minusItem !== -1){
//             this.items.splice(removeItem,1)
//         }
//     }
// }
// const storage = new Storage([
//   'Нанітоіди',
//   'Пролонгер',
//   'Залізні жупи',
//   'Антигравітатор',
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

// storage.addItems('Дроїд');
// console.table(storage); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

// storage.removeItems('Пролонгер');
// console.table(storage); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]


// //exercise 4

// // Геттер value - повертає поточне значення поля _value
// // Метод append(str) - отримує параметр str (рядок) і додає його в кінець _value
// // Метод prepend(str) - отримує параметр str (рядок) і додає його на початок _value
// // Метод pad(str) - отримує параметр str (рядок) і додає його на початок і в кінець _value
// class StringBuilder{
//     constructor(item){
//         this.item=item
//     }
   
//     value(){
//         return this.item
//     }

//     append(str){
//     this.item.push(str)
//     }

//     prepend(str){
//         this.item.unshift(str)
//     }

//     pad(str) {
//         this.item
//         .push(str)
//         .unshift(str)
//     }
// }
// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder); // '.^'

// builder.prepend('^');
// console.log(builder); // '^.^'

// builder.pad('=');
// console.log(builder); // '=^.^='


//exercise 5


class Car {
  /*
   * Додай статичний метод `getSpecs(car)`,
   * який приймає об'єкт-машину як параметр і виводить
   * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
   */

  /*
   * Конструктор отримує об'єкт налаштувань.
   *
   * Додай властивості майбутнього екземпляра класу:
   *  speed - поточна швидкість, початкова 0
   *  price - ціна автомобіля
   *  maxSpeed - максимальна швидкість
   *  isOn - заведений автомобіль, значення true або false. Спочатку false
   *  distance - загальний кілометраж, спочатку 0
   */
  constructor(car) {
    this.speed = 0;
    this._price = car.price;
    this.maxSpeed = car.maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }

  /*
   * Додай геттер і сеттер для властивості price,
   * який буде працювати з властивістю ціни автомобіля.
   */
get price(){
    return this._price
}
set price(newPrice){
    this._price = newPrice
}
  /*
   * Додай код для того, щоб завести автомобіль
   * Записує у властивість isOn значення true
   */
  turnOn() {
    this.isOn = true;
  }

  /*
   * Додай код для того, щоб заглушити автомобіль
   * Записує у властивість isOn значення false,
   * і скидає поточну швидкість в 0
   */
  turnOff() {
    this.isOn = false   
    this.speed = 0;
  }

  /*
   * Додає до властивості speed отримане значення,
   * за умови, що результуюча швидкість
   * не більше, ніж значення властивості maxSpeed
   */
  accelerate(value) {
    if(this.speed + value >= this.maxSpeed){
        return this.speed + value
    }
  }

  /*
   * Забирає від властивості speed отримане значення,
   * за умови, що результуюча швидкість не менше нуля
   */
  decelerate(value) {
    if(this.speed - value >= 0){
        return this.speed - value
    }
  }

  /*
   * Додає в поле distance кілометраж (hours * speed),
   * але тільки в тому випадку, якщо машина заведена!
   */
  drive(hours) {
    if(this.isOn = true) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
console.log(mustang.price);

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

//Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

//Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
console.log();
