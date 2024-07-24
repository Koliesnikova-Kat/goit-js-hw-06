// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     }
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// const aptOwner = apartment.owner;
// const aptOwnerName = aptOwner.name;
// const aptTagsFirst = apartment.tags[0];


// console.log(apartment);
// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);
// console.log(aptOwner);
// console.log(aptOwnerName);
// console.log(aptTagsFirst);

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location = {
//     country: "Jamaica",
//     city: "Kingston",
// };

// console.log(apartment);




// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };

// const values = [];
// const keys = [];

// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
// }

// console.log(values);
// console.log(keys);
// console.log(apartment);




// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const values = [];

// const keys = Object.keys(apartment);

// for (let key of keys) {
//     values.push(apartment[key]);
// }

// console.log(values);
// console.log(keys);
// console.log(apartment);





// function countProps(object) {
//     let propCount = 0;

//     for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//         propCount += 1;
//     }
//     }

//     return propCount;
// }

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));



// function countProps(object) {
//     let propCount = 0;

//     propCount = Object.keys(object).length;

//     return propCount;
// }

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));




// function countTotalSalary(salaries) {
//     let totalSalary = 0;

//     const money = Object.values(salaries);

//     for (let value of money) {
//     totalSalary += value;
//     };
    
//     return totalSalary;
// }

// console.log(countTotalSalary({ Henry: 1000, John: 2000}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));



// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     }
// ];

// for (const book of books) {
//     console.log(book); // Об'єкт книги
//     console.log(book.title); // Назва
//     console.log(book.author); // Автор
//     console.log(book.rating); // Рейтинг
// }





// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (let color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);




// function getProductPrice(productName) {
//     const products = [
//         { name: "Radar", price: 1300, quantity: 4 },
//         { name: "Scanner", price: 2700, quantity: 3 },
//         { name: "Droid", price: 400, quantity: 7 },
//         { name: "Grip", price: 1200, quantity: 9 },
//     ];

//     for (let product of products) {
//         if (product.name === productName) {
//         return product.price;
//         }
//     }
//     return null;
// }

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));



// function getAllPropValues(propName) {
//     const products = [
//         { name: "Radar", price: 1300, quantity: 4 },
//         { name: "Scanner", price: 2700, quantity: 3 },
//         { name: "Droid", price: 400, quantity: 7 },
//         { name: "Grip", price: 1200, quantity: 9 },
//     ];

//     const array = [];
//     for (let product of products) {
//         if (propName in product) {
//         array.push(product[propName]);
//     }
//     }  

//     return array;
// }

// console.log(getAllPropValues("name"));






// function calculateTotalPrice(productName) {
//     const products = [
//         { name: "Radar", price: 1300, quantity: 4 },
//         { name: "Scanner", price: 2700, quantity: 3 },
//         { name: "Droid", price: 400, quantity: 7 },
//         { name: "Grip", price: 1200, quantity: 9 },
//     ];

//     let totalPrice;
//     for (let product of products) {
//         if (productName === product.name) {
//             totalPrice = product.price * product.quantity;
//             return totalPrice;
//         }
//     }
//     return `Product ${productName} not found!`;
// }

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));



// const atTheOldToad = {
//     potions: [],
//     getPotions() {
//         return "List of all available potions";
//     },
//     addPotion(potionName) {
//         return `Adding ${potionName}`
//     },
// };

// console.log(atTheOldToad.addPotion("Invisibility"));
// console.log(atTheOldToad.addPotion("Power potion"));
// console.log(atTheOldToad.getPotions());




// function add(...args) {
//     let total = 0;
//     for (let candy of args) {
//         total += candy;
//     }
//     return total;
// }

// console.log(add(1, 2, 3));



