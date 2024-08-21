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
// splice(removes from, keeps from)
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
  let solo = Math.round(Math.random() * value);
  console.log(solo);
  // return solo
  if (solo > 5 && solo < 8) {
    console.log("value exceeds 5");
  } else if (solo < 5 && solo < 4) {
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

// let soLo = Math.ceil(Math.random() * 10);

// if ([Math.ceil(Math.random() * 10)] === 8) {
//   console.log(true);
// } else {
//   console.log("null");
// }

// switches

let color = "blue";
color = "red";
color = "yellow";
color = "black";

switch (color) {
  case "blue":
    console.log("the color is blue");
    break;
  case "red":
    console.log("the color is now red");
    break;
  case "yellow":
    console.log("the value is now yellow");
    break;
  default:
    console.log("color does not exist");
}

// type convertion

// let useNumber = "20";
// useNumber = useNumber.toString();
// useNumber = Number(useNumber);

// console.log(typeof useNumber);

// date and time methods and properties

// let date = new Date();

// date = date.getDate();
// date = date.getTime();
// date = date.getDay();
// date = date.getMonth();
// date = date.getFullYear();
// date = date.getHours();
// date = date.toLocaleDateString();
// date = date.toLocaleTimeString();
// console.log(date);

let today = new Date().getDay();
let dateValue = new Date().getTime();
switch (today) {
  case 0:
    today = "Sunday";
    break;
  case 1:
    today = "Monday";
    break;
  case 2:
    today = "Tuesday";
    break;
  case 3:
    today = "Wednesday";
    break;
  case 4:
    today = "Thursday";
    break;
  case 5:
    today = "Friday";
    break;
  case 6:
    today = "Saturday";
    break;
  default:
    console.log("something went wrong , we are working on it");
    break;
}

console.log(today);

// let getAge = (dob) => {
//   let age = new Date(dob);
//   let initialize = Date.now() - age.getTime();
//   let difference = new Date(initialize);
//   return `you are  currently ${Math.abs(
//     difference.getUTCFullYear() - 1970
//   )} years old`;
// };

// console.log(getAge("sep-2-1990"));
// console.log(getAge("aug-6-2011"));

// let initialize = Date.now() - new Date("sep-2-1990").getTime();
// let newDate = new Date(initialize);
// console.log(newDate.getFullYear() - 1970);

// let myAge = (dob) => {
//   let age = new Date(dob);
//   let initialize = Date.now() - age.getTime();
//   let getAge = new Date(initialize).getFullYear() - 1970;
//   return Math.abs(getAge);
// };

// console.log(`you are ${myAge("sep-2-1990")} years old`);

// DOM
// document object module

// create elements

let pTag = document.createElement("p");

let a = document.createElement("a");

let input = document.createElement("input");
let label = document.createElement("label");

label.setAttribute("for", "userName");

let image = document.createElement("img");

// image.src = "/home/photos";

console.log(label);

// setting attributes

// input.setAttribute("type", "text");
// input.setAttribute("placeholder", "userName");
// input.disabled = true;

// input.setAttribute("class", "userInput");
// input.setAttribute("id", "jamesId");

input.className = "input element";

input.id = "id input";

input.type = "text";
input.type = "password";

input.placeholder = "add a place holder";

console.log(input);

console.log(a);
// a.setAttribute("href", "facebook.com");
a.href = "jame.com";

a.id = "a tag id";

// a.setAttribute("id", "anchor");

let form = document.createElement("form");

// form.setAttribute("action", "get");
console.log(form);

// console.log(pTag);

// pTag.textContent = "hello world";

pTag.innerText = "this is a text";

pTag.appendChild(document.createTextNode("this is another trual"));
console.log(pTag);
// appending

let list = "li";
let ul = document.createElement("ul");

let li = document.createElement(list);
console.log(ul, li);

ul.appendChild(li);
console.log(ul);

//form that has username, password, submit

let foRm = document.createElement("form");
let label1 = document.createElement("label");
label1.id = "text";
label1.textContent = "Username:";
let input1 = document.createElement("input");
input1.setAttribute("type", "text");
input1.setAttribute("placeholder", "username");
let label2 = document.createElement("label");
label2.setAttribute("id", "password");
label2.innerText = "Password:";
let input2 = document.createElement("input");
input2.type = "password";
input2.placeholder = "password";

let button = document.createElement("button");
button.setAttribute("type", "submit");
button.innerText = "Submit";

foRm.appendChild(label1);
foRm.appendChild(input1);
foRm.appendChild(label2);
foRm.appendChild(input2);
foRm.appendChild(button);

console.log(foRm);

// target elements

// get element  by id
// get element by className
// get element by tagname
// get element by name
//  Query selector
// Query  selector all

// let Form = document.getElementsByClassName("form");
// let Form = document.getElementById("form");
// let Form = document.getElementsByTagName("form");
// let Form = document.querySelector(".form");
// let Form = document.querySelectorAll(".form");

// let body = document.querySelector("body");

// body.appendChild(foRm);

// console.log(body);

// let useText = "log in";
// let header = document.querySelector(".formHeader");
// header.textContent = useText.toUpperCase();

// header.style.color = "blue";
// header.style.backgroundColor = "green";
// let secTion = document.querySelector("section");
// secTion.style.backgroundColor = "yellow";
// secTion.style.height = "100%";
// secTion.style.padding = "30px";
// secTion.style.marginTop = "10px";

// let body = document.querySelector("body");
// body.style.padding = "20px";
// let Form = document.querySelector("#mainForm");
// Form.style.backgroundColor = "white";
// Form.style.padding = "30px";
// Form.style.width = "40%";
// Form.style.margin = "50px";
// Form.style.border = "1px solid black";
// Form.style.display = "flex";
// Form.style.flexDirection = "column";
// Form.style.gap = "5px";
// Form.style.overflow = "auto";
// Form.style.justifyContent = "center";

let header = document.createElement("h1");
let headText = "Registration Form";
header.innerText = headText;
header.style.textAlign = "center";
header.style.padding = "10px";

let laBel1 = document.createElement("label");
laBel1.innerText = "Firstname:";
laBel1.setAttribute("for", "text1");
let inPut1 = document.createElement("input");
inPut1.type = "text";
inPut1.id = "text1";
inPut1.placeholder = "Enter your firstname";
inPut1.required = "true";
inPut1.style.padding = "5px";

let laBel2 = document.createElement("label");
laBel2.innerText = "Lastname:";
laBel2.setAttribute("for", "text2");
let inPut2 = document.createElement("input");
inPut2.type = "text";
inPut2.id = "text2";
inPut2.placeholder = "Enter your surname";
inPut2.required = "true";
inPut2.style.padding = "5px";

let genDob = document.createElement("div");

let span1 = document.createElement("span");

let genderLabel = document.createElement("label");
genderLabel.innerText = "Gender:";
genderLabel.setAttribute("for", "gender");
let genDer = document.createElement("select");
genDer.name = "gender";
genDer.id = "gender";
// genDer.required = "true";
// let choose = document.createElement("option");
// choose.value = "choose";
// choose.innerText = "What's your gender?";
// choose.disabled = "true";
let male = document.createElement("option");
male.value = "male";
male.innerText = "Male";
let female = document.createElement("option");
female.value = "female";
female.innerText = "Female";

// genDer.appendChild(choose);
genDer.appendChild(male);
genDer.appendChild(female);

span1.appendChild(genderLabel);
span1.appendChild(genDer);

let span2 = document.createElement("span");

let dobLabel = document.createElement("label");
dobLabel.innerText = "Date of birth:";
dobLabel.setAttribute("for", "age");
let dobInput = document.createElement("input");
dobInput.type = "date";
dobInput.id = "age";
dobInput.required = "true";

span2.appendChild(dobLabel);
span2.appendChild(dobInput);

genDob.appendChild(span1);
genDob.appendChild(span2);
genDob.style.display = "flex";
genDob.style.justifyContent = "space-between";

let laBel3 = document.createElement("label");
laBel3.innerText = "Username:";
laBel3.setAttribute("for", "text");
let inPut3 = document.createElement("input");
inPut3.type = "text";
inPut3.id = "text";
inPut3.placeholder = "username";
inPut3.required = "true";
inPut3.style.padding = "5px";
// let div3 = document.createElement("div");
// div3.appendChild(laBel3);
// div3.appendChild(inPut3);
// div3.style.display = "flex";
// div3.style.gap = "5px";

let laBel4 = document.createElement("label");
laBel4.innerText = "Email:";
laBel4.setAttribute("for", "email");
let inPut4 = document.createElement("input");
inPut4.type = "email";
inPut4.id = "email";
inPut4.setAttribute("placeholder", "email@gmail.com");
inPut4.required = "true";
inPut4.style.padding = "5px";
// let div4 = document.createElement("div");
// div4.appendChild(laBel4);
// div4.appendChild(inPut4);
// div4.style.display = "flex";
// div4.style.gap = "5px";

let laBel5 = document.createElement("label");
laBel5.innerText = "Password:";
laBel5.setAttribute("for", "password");
let inPut5 = document.createElement("input");
inPut5.type = "password";
inPut5.id = "password";
inPut5.setAttribute("placeholder", "******");
inPut5.required = "true";
inPut5.style.padding = "5px";
// let div5 = document.createElement("div");
// div5.appendChild(laBel5);
// div5.appendChild(inPut5);
// div5.style.display = "flex";
// div5.style.gap = "5px";

let confirmPass = document.createElement("label");
confirmPass.innerText = "Confirm password:";
confirmPass.setAttribute("for", "password2");
let passInput = document.createElement("input");
passInput.type = "password";
passInput.id = "password2";
passInput.setAttribute("placeholder", "******");
passInput.required = "true";
passInput.style.padding = "5px";

let butTon = document.createElement("button");
butTon.textContent = "Submit";
butTon.style.fontWeight = "bold";
butTon.style.color = "white";
butTon.style.backgroundColor = "black";
butTon.style.width = "200px";
butTon.style.alignSelf = "center";
butTon.style.margin = "10px";

let ptaG = document.createElement("p");
// let sInAnchor = document.createElement("a");
// sInAnchor.innerText = "sign in";
ptaG.textContent = "Already have an account? sign in";
ptaG.style.color = "red";
ptaG.style.textAlign = "center";

// let signIn = ptaG.textContent.concat(sInAnchor);
// console.log(signIn);

// Form.appendChild(header);

// Form.appendChild(div1);
// Form.appendChild(laBel1);
// Form.appendChild(inPut1);

// Form.appendChild(div2);
// Form.appendChild(laBel2);
// Form.appendChild(inPut2);

// Form.appendChild(div);
// Form.appendChild(genderLabel);
// Form.appendChild(gender);
// Form.appendChild(genDob);

// Form.appendChild(div);
// Form.appendChild(genderLabel);
// Form.appendChild(gender);
// Form.appendChild(span2);

// Form.appendChild(div3);
// Form.appendChild(laBel3);
// Form.appendChild(inPut3);

// Form.appendChild(div4);
// Form.appendChild(laBel4);
// Form.appendChild(inPut4);

// Form.appendChild(div5);
// Form.appendChild(laBel5);
// Form.appendChild(inPut5);

// Form.appendChild(confirmPass);
// Form.appendChild(passInput);

// Form.appendChild(butTon);

// let header2 = document.createElement("h1");
// header2.textContent = "for test purpose";
// Form.prepend(header2);
// Form.appendChild(ptaG);

// header.style.backgroundColor = "blue";

// let allInput = document.querySelectorAll("input");
// console.log(allInput);
// let uL = document.querySelector("ul");
// let lisT = `<li> hello world  </li>`;

// uL.innerHTML = lisT;

// event listining

let box = document.querySelector(".box");

// console.log(box);

// keyboard event
// mouse event
// submit event

// mouse event

// click event

// box.addEventListener("click", function () {

//   if (box.style.backgroundColor === "red") {
//     box.style.backgroundColor = "blue";
//   } else {
//     box.style.backgroundColor = "red";
//   }
// });

// let anchor = document.querySelectorAll("a");

// anchor.style.textDecoration = "none";

// anchor.forEach((item) => {
//   item.style.textDecoration = "none";
//   item.style.color = "white";
//   item.style.backgroundColor = "brown";
//   // item.style.border = "2px solid black";
//   item.style.borderRadius = "7px";
//   item.style.padding = "5px";
//   item.style.fontWeight = "bold";
// });
// console.log(anchor);

let secTion = document.querySelector(".sec");

// let navRotate = document.querySelector(".rotate");
// navRotate.addEventListener("click", () => {
//   if (secTion.style.display === "flex") {
//     secTion.style.display = "block";
//     // secTion.style.flexDirection = "column";
//   } else {
//     secTion.style.display = "flex";
//   }
// });

// mouseenter //// mouseleave
// box.addEventListener("mouseleave", function () {
//   box.style.backgroundColor = "blue";
// });
// box.addEventListener("mouseenter", function () {
//   box.style.backgroundColor = "red";
// });
let search = document.querySelector(".search_here");

// box.addEventListener("mousemove", (e) => {
//   // console.log(e);
//   box.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 13)`;
//   search.value = `position x ${e.offsetX}  position y ${e.offsetY}`;
//   if (e.offsetY <= 30) {
//     search.value = "North";
//     console.log(e.offsetY);
//   } else if (e.offsetY === 31 && e.offsetY <= 70) {
//     search.value = "NorthEast";
//     console.log(e.offsetY);
//   } else if (e.offsetX >= 167 && e.offsetX <= 190) {
//     search.value = "East";
//     console.log(e.offsetX);
//   } else if (e.offsetY >= 120 && e.offsetY <= 180) {
//     search.value = "SouthEast";
//     console.log(e.offsetY);
//   } else if (e.offsetY >= 150) {
//     search.value = "South";
//     console.log("South");
//   } else if (e.offsetY >= 120 && e.offsetY <= 180) {
//     search.value = "SouthWest";
//     console.log(e.offsetY);
//   } else if (e.offsetX <= 30) {
//     search.value = "West";
//     console.log("West");
//   } else if (e.offsetY >= 30 && e.offsetX >= 30) {
//     search.value = "NorthWest";
//     console.log(e.offsetY);
//   }
// });

// search.addEventListener("click", runclick);

// function runclick(e) {
//   console.log(e.target.value);
// }

let applicationForm = document.querySelector("#form");
let allInput = document.querySelectorAll(".input"); // area check
let submitForm = document.querySelector("#submit");

submitForm.addEventListener("mouseenter", function () {
  submitForm.style.backgroundColor = "red";
});
submitForm.addEventListener("mouseleave", function () {
  submitForm.style.backgroundColor = "black";
});
// submitForm.addEventListener("click", function () {
//   submitForm.style.backgroundColor = "black";
//   allInput.value = "position"; // area check
//   console.log(allInput.value); // area check
// });

// applicationForm.addEventListener("mouseenter", listInputs);
// function listInputs(){

// }
submitForm.addEventListener("click", listInputs);
function listInputs(s) {
  console.log(allInput);
  // console.log(s.target);
  allInput.forEach((item) => {
    console.log(item.value);
  });
}
