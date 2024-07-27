// const parent = {
//     name: "Stacey",
//     surname: "Moore",
//     age: 54,
//     heritage: "Irish",
// };

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(child);







// const objC = { c: "objC prop" };

// const objB = Object.create(objC);
// objB.b = "objB prop";

// const objA = Object.create(objB);
// objA.a = "objA prop";

// console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
// console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
// console.log(objC); // { c: "objC prop", [[Prototype]]: Object }






// class Car {
//     #brand;
//     model;
//     price;

//     constructor(params) {
//         this.#brand = params.brand;
//         this.model = params.model;
//         this.price = params.price;
//     }

//     getPrice() {
//         return this.price;
//     }

//     changePrice(newPrice) {
//         this.price = newPrice;
//     }

//     getBrand() {
//         return this.#brand;
//     }

//     changeBrand(newBrand) {
//         this.#brand = newBrand;
//     }
// }

// new Car({ brand: "Audi", model: "Q3", price: 36000 });

// console.log(Car);




// class Car {
//     #price;
//     static maxPrice = 50000;

//     constructor(params) {
//         this.#price = params.price;
//     }

//     get price() {
//         return this.#price;
//     }

//     set price(newPrice) {
//         if (newPrice <= Car.maxPrice) {
//         this.#price = newPrice;
//         }
//     }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000




// class User {
//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }

// class Admin extends User {
//     static role = {
//         BASIC: "basic",
//         SUPERUSER: "superuser"
//     }
// }

// console.log(Admin.role.BASIC);
// console.log(Admin.role.SUPERUSER);




// class User {
//     email;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }

// class Admin extends User {
//     static role = {
//         BASIC: "basic",
//         SUPERUSER: "superuser",
//     };
//     constructor(params) {
//         super(params.email);
//         this.access = params.access;
//     };
//     access() {};
// }

// const mango = new Admin({
//     email: "mango@mail.com",
//     access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"




// class User {
//     email;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }

// class Admin extends User {
//     static role = {
//         BASIC: "basic",
//         SUPERUSER: "superuser",
//     };

//     constructor(params) {
//         super(params.email);
//         this.access = params.access;
//     };

//     blacklistedEmails = [];

//     blacklist(email) {
//         this.blacklistedEmails.push(email);
//     };

//     isBlacklisted(email) {
//         if (this.blacklistedEmails.includes(email)) {
//         return true;
//         }
//         return false;
//     }
// }

// const mango = new Admin({
//     email: "mango@mail.com",
//     access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true
