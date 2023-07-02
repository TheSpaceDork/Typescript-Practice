let stringArray = ["one", "hey", "Tee"];

let guitars = ["Strat", "Les Paul", 5150];

let mixedData = ["EVH", 1984, true];

stringArray[0] = "Bee";
stringArray.push("esh");

guitars[0] = 1666;
guitars.unshift("Nee");

let test = [];

let bands: string[] = [];
bands.push("imagine dragons");

//Tuple
let myTuple: [string, number, boolean] = ["Tee", 44, false];
let mixed = ["John", 1, false];
mixed = myTuple;

// Objects
let myObj: Object;
myObj = bands;
myObj = {};
const exampleObj = {
  prop1: "Tee",
  prop3: false,
};

type Guitarist = {
  name: string;
  active: boolean;
  albums: (string | number)[];
};
let evh: Guitarist = {
  name: "EVH",
  active: true,
  albums: [5150, 1984, "O"],
};

//enums
