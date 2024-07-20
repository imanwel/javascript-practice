// data types

// primitive
// non primitive

// primitive

// string
// numbers
// boolean
// big int
// null
// undefined
// object
// symbol

// none promitive datatypes === objects

// arrays
// function
// date time
// conditionals

// primitive
// string == is a series of values in a single or double quote
let userName = "james smith 11416565727@@#@##$$E^&*T";
console.log(typeof userName);

// numbers

let age = 20.9;

console.log(typeof age);

// bigInt

let allSUm = BigInt(99999999);

console.log(typeof allSUm);

// boolean is simply a true or false statement

let userValidated = true;

// console.log(userValidated);
// console.log(10 < 5);

// null is void and it can also be intentionally set to a variable

// let item = localStorage.getItem("uerName");
// console.log(item);

let userInfo = null;
console.log(typeof userInfo);

// undefined is simply a varible that has no value

let promise;

console.log(typeof promise);

// object is a make up of properties

let person = {
  name: "emmanuel",
  age: null,
  active: true,
  accountNumber: 377378828,
  complextion: "prefare not to say",
  siblings: {
    brother: "jesus",
    sister: "JESUS",
    nephew: {
      fromBrother: "steven",
      fromSister: "jesse",
    },
  },
};

// console.log(person);
// let nephewFromBrother = "steven";
// // console.log(nephewFromBrother);

// let value = person.siblings.sister;
// console.log(value);

//  create an object a continent that has atleast 3 contries and each country
// should have 5 states and each should have a slogan , atleat 3 local govment

let continent = {
  africa: {
    countries: {
      nigeria: {
        lagos: {
          slogan: "centre of excellence",
          localGovernments: 3,
          localGovernment1: "alimosho",
          localGovernment2: "ojo",
          localGovernment3: "oshodi_isolo",
        },
        abia: {
          slogan: "God's Own State",
          localGovernments: 3,
          localGovernment1: "obingwa",
          localGovernment2: "ikwuano",
          localGovernment3: "ohafia",
        },
        ogun: {
          slogan: "centre of excellence",
          localGovernments: 3,
          localGovernment1: "Ewekoro",
          localGovernment2: "ifo",
          localGovernment3: "ikenne",
        },
        delta: {
          slogan: "the big heart",
          localGovernments: 3,
          localGovernment1: "okpe",
          localGovernment2: "sapele",
          localGovernment3: "ukwuani",
        },
        imo: {
          slogan: "eastern heartland",
          localGovernments: 3,
          localGovernment1: "orlu",
          localGovernment2: "okigwe",
          localGovernment3: "ikeduru",
        },
      },
      ghana: {
        ahafo: {
          slogan: null,
          localGovernments: 3,
          localGovernment1: null,
          localGovernment2: null,
          localGovernment3: null,
        },
        ashanti: {
          slogan: null,
          localGovernments: 3,
          localGovernment1: null,
          localGovernment2: null,
          localGovernment3: null,
        },
        bono: {
          slogan: null,
          localGovernments: 3,
          localGovernment1: null,
          localGovernment2: null,
          localGovernment3: null,
        },
        central: {
          slogan: null,
          localGovernments: 3,
          localGovernment1: null,
          localGovernment2: null,
          localGovernment3: null,
        },
        eastern: {
          slogan: null,
          localGovernments: 3,
          localGovernment1: null,
          localGovernment2: null,
          localGovernment3: null,
        },
      },
      togo: {
        kara: {
          slogan: null,
          localGovernments: 3,
          localGovernment1: null,
          localGovernment2: null,
          localGovernment3: null,
        },
        maritime: {
          slogan: null,
          localGovernments: 3,
          localGovernment1: null,
          localGovernment2: null,
          localGovernment3: null,
        },
        plateaux: {
          slogan: null,
          localGovernments: 3,
          localGovernment1: null,
          localGovernment2: null,
          localGovernment3: null,
        },
        centrale: {
          slogan: null,
          localGovernments: 3,
          localGovernment1: null,
          localGovernment2: null,
          localGovernment3: null,
        },
        savanes: {
          slogan: null,
          localGovernments: 3,
          localGovernment1: null,
          localGovernment2: null,
          localGovernment3: null,
        },
      },
    },
  },
};
// console.log(continent);

// destruturing

// console.log(continent.africa.countries);

let { countries } = continent.africa;

console.log(countries);

let { accountNumber, name, active } = person;

// console.log(accountNumber);
// console.log(name);
// console.log(active);

// let { brother } = person.siblings;
// console.log(brother);

// string
// number methods

let val;

// string method

// val = lastName.length;

// val = lastName.toLowerCase();

// val = lastName.toUpperCase();

// concat

// val = firstName + lastName;

// val = firstName.concat(lastName);

// val = firstName.indexOf("h");
// val = firstName.lastIndexOf("h");

// val = firstName.charAt(2);

// val = firstName.endsWith("r");

// val = firstName.includes("q");
// val = firstName.toString();

// val = firstName.substring(0, 3);

// val = firstName.startsWith("j");

let figure = 20;

// number method
// val = Math.PI;
// val = Math.sin(figure);
// val = Math.cos(figure);
// val = Math.tan(figure);
// val = Math.sqrt(64);
// val = Math.pow(100, 2);
// val = Math.floor(10.9);
// val = Math.ceil(10.1);
// val = Math.round(10.7);
// val = Math.abs(-112);
// val = Math.random();
// val = Math.floor(Math.random() * 11);

// template string

let lastName = "james";
let firstName = "jesse";
let userAge = 55;

// let fullName = firstName + " " + lastName;

let fullName = `my name is ${firstName} ${lastName} i am ${userAge} years old`;

val = fullName;
console.log(val);

// arrays  is block containing series of values
let items = ["shoe", "clothes", "bags"];

let [item1, item2, item3] = items;
// [item0, item1, item2] = items; //destructured
console.log(item1);

// console.log(items[1]);

person.enimies = "john wick";
person.active = false;

person.siblings.nephew.fromFather = "johnson";
person.siblings.nephew.fromMother = "simon";

let { fromFather } = person.siblings.nephew;

console.log(person);
console.log(fromFather);

// function non primitive data type
// object
// is a bolock of code containing alghorithm
// is a sequence of instruction to carry out a task or solve a problem
// properties of a function

// declaration
// function name
// parameters are optional // it makes the function dynamic
// execution block (alghorithm ,  retun value)
// invocation /activation

// An activated function is called a method

// function greetUser() {
//   console.log("hello user");
// }

// function greetUser() {
//   console.log(1 + 1);
// }

// greetUser();

function welcomeClient(user) {
  let result = "hello you are welcome " + user;
  return result;
}

function addSum(value1, value2) {
  let result = value1 + value2;
  return result;
}

console.log(addSum(100, 10));

console.log(addSum(20, 5));
// console.log(welcomeClient("james"));
// welcomeClient("stacy");
// welcomeClient("john");

function sqrt(figure) {
  let val = Math.sqrt(figure);
  return val;
}
console.log(sqrt(25));

function random(value) {
  let val = Math.floor(Math.random() * value);
  return val;
}
console.log(random(20));

function add(numb1, numb2) {
  // console.log(2 + numb);
  let val = numb1 + numb2;
  return val;
}
console.log(add(10, 5));
// add(10);

let report = {
  toConsole: (value) => {
    console.log(value);
  },
};

// or

let log = {
  toConsole: function (value) {
    console.log(value);
  },
};

report.toConsole("hllo world");
log.toConsole(1 + 1);
report.toConsole(person);

// arrow function

const subtact = () => {};

function welcomeUser(person) {
  let val = `${"You are welcome"} ${person}`;
  return val;
}

log.toConsole(welcomeUser("james"));

// loop is a continous execution while a certain condition is true

// for loop
// while loop
// do while loop
// map
// forEach
// for in

// for loop
// delclaration
// parameters are where condition comes in
// the condition takes in three params 1= assingment  2= condition 3=incrementtation
// execution

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// while
// declaration
// condition
// execution

// let x = 0;

// while (x < 10) {
//   console.log(x);
//   x++;
// }

// do {
//   console.log(x);
//   x++;
// } while (x < 4);

// for (let i = 5; i > 0; i--) {
//   console.log(i);
// }

// let i = 5;

// while (i > 0) {
//   console.log(i);
//   i--;
// }

// i = 19;

// do {
//   console.log(i);
//   i--;
// } while (i > 8);

let userItems = ["one", "two", "three", "four"];

// for (let i = 0; i < userItems.length; i++) {
//   let result = userItems[i];
//   console.log(result);
// }

// userItems.forEach((item) => {
// value can be assigned to the parameter
// item = "testing"; //where "testing" is the value
// console.log(item);
// });

// products.forEach(function (product) {
// product = "items";
// console.log(product);
// });

// array methods

// push() adds to the end of an array
// products.push("last");

// unshift() adds to the starting of an array
// products.unshift("james");

// pop() removes from the end of an array
// products.pop();

// shift() remove from the begining of an array
// products.shift();

// length property
// let value = products.length;
// console.log(value);

// splice()
// products.splice(1, 2);
// products.splice(-2); nagative value removes from the end

// console.log(products.includes("first"));

// products.map((item) => {
//   item = "just testing";
//   console.log(item);
// });
let products = ["first", "second", "third", "fourth"];

// for (let item in products) {
//   console.log(products[item]);
// }

// console.log(products);

// string methods()

// split()

// let valuE = "this is a boy";

// let result = valuE.split(",");
// console.log(result);

// result = valuE.replace("this", "that");

// console.log(result);

// conditionals

// conventional conditional rendering

// tenarry operator

let user = "jerry";
user = "james";
user = "jerry";
user = "doe";
// user = "jerry";

// if (user !== "jerry") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// eslse if

// if (user === "jerry") {
//   console.log(true);
// } else if (user === "doe") {
//   console.log("the user is now doe");
// } else {
//   console.log(false);
// }

// let userage = 4;

// if (userage > 3 && userage < 5) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// generate a random number from 0 - 10
// create a function to check the condition of the generated value
// whenever the value exceed 5 , console.log() it ,,when it is below 5 console.log() it
// when the value hits 8 console.log() it
//  when the value hits 4 console.log() it

// let solo = Math.ceil(Math.random() * 10);
// console.log(solo);

function generate(value) {
  let solo = Math.ceil(Math.random() * value);
  console.log(solo);
  // return solo
  if (solo > 5) {
    console.log("value exceeds 5");
  } else if (solo < 5) {
    console.log("value is below 5");
  } else if (solo === 8) {
    console.log("value at 8");
  } else if (solo === 4) {
    console.log("value at 4");
  } else {
    console.log("random value");
  }
}
generate(10);

let soLo = Math.ceil(Math.random() * 10);

// if ([Math.ceil(Math.random() * 10)] === 8) {
//   console.log(true);
// } else {
//   console.log("null");
// }
