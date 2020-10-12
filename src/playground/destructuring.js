//
// object destructuring
//

// const person = {
//   name: "Jhonatan",
//   age: 21,
//   location: {
//     city: " philadelphia",
//     temp: 58,
//   },
// };

// const { name: firstName = "Anonymous", age } = person;

// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature}ª in ${city}`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin",
//   },
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

//
// array destructuring
//
const address = ["1299 s Juniper street", "Brazil", "pennysilvania", "19147"];

const [, city, state = "New Yourk"] = address;

console.log(`you are in ${city} ${state}`);

const item = ["coffee (ice)", "$2.00", "$2.90", "$3.00"];

const [coffeType, , mediumPrice] = item;

console.log(`A Medium ${coffeType} cost ${mediumPrice}`);
