// Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:
// - email - пошта, рядок
// - age - вік, число
// - numberOfPosts - кількість постів, число
// - topics - масив тем, на яких спеціалізується блогер
// Клас чекає 4 параметри - email, age, numberOfPosts, topics.
// - Додай метод getlnfo(), який, повертає рядок: Blogger ${email} is ${age} years old and has ${numPosts}
// - Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати

// class Blogger {
//   constructor(email, age, numberOfPosts, topics) {
//     this.email = email;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getlnfo() {
//     return `Blogger ${this.email} is ${this.age} years old and has ${this.numberOfPosts}`
//   }

//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// const mango = new Blogger('mango@mail.com', 24, 20, (['tech', 'cooking']));

// console.log(mango);
// console.log(mango.getlnfo()); // Blogger mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getlnfo()); // Blogger mango@mail.com is 24 years old and has 25 posts


// const poly = new Blogger('poly@mail.com', 19, 17, ['sports', 'gaming']);

// console.log(poly);
// console.log(poly.getlnfo()); // Blogger poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getlnfo()); // Blogger poly@mail.com is 19 years old and has 21 posts



// Напиши клас User який створює об'єкт із властивостями login та email.
// Оголоси приватні властивості #login та #email, доступ до яких зроби через гетер та сетер login та email.

// class User {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User('Mango', 'mango@dog.woof');

// console.log(mango);
// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge
// console.log(mango.email); // mango@dog.woof
// mango.email = 'gaatke@fucvod.com';
// console.log(mango.email); // gaatke@fucvod.com


// const poly = new User('Poly', 'poly@mail.com');

// console.log(poly);
// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie



// Напиши клас Storage, який створює об'єкти для керування складом товарів.
// При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме його властивість items.
// Додай методи класу:
// - getltems() - повертає масив товарів.
// - addlten(item) - отримує новий товар і додає його до поточних.
// - removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(item) {
//     this.items = this.items.filter(fruit => fruit !== item);
//   }
// }

// const storage = new Storage( ['apple', 'lemon', 'grapes', 'peach'] );

// console.log(storage.getItems()); // ['apple', 'lemon', 'grapes', 'peach']
// storage.addItem('banana');
// console.log(storage.getItems()); // ['apple', 'lemon', 'grapes', 'peach', 'banana']
// storage.removeItem('lemon');
// console.log(storage.getItems()); // ['apple', 'grapes', 'peach', 'banana']
