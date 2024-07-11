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
console.log(continent.africa.countries.togo.kara);
