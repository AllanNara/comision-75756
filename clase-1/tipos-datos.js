// Ejemplos tipos de datos en JavaScript

// String
const greeting = "Hola, soy un string";

// Number
const temperature = 21.7;

// BigInt
const hugeNumber = 9007199254740991n + 10n;

// Boolean
const isActive = true;

// Undefined
let notDefined;

// Null
const emptyValue = null;

// Symbol
const uniqueKey = Symbol("clave_unica");

// Object
const user = {
  id: 1,
  name: "Allan",
  skills: ["js", "devops", "k8s"],
  details: { active: true, level: "advanced" }
};

// Array
const items = [1, "dos", { tres: 3 }];

// Function
function greet(name) {
  return `Hola ${name}, esto es una función`;
}

// Map
const mapa = new Map();
mapa.set("clave", 123);

// Set
const conjunto = new Set([1, 2, 2, 3]);

// Date
const now = new Date();

// RegExp
const regex = /coderhouse/i;

// Console outputs
console.log({
  greeting,
  temperature,
  hugeNumber,
  isActive,
  notDefined,
  emptyValue,
  uniqueKey,
  user,
  items,
  greet: greet("Allan"),
  mapa,
  conjunto,
  now,
  regex,
});


console.log({
  greeting: typeof greeting,
  temperature: typeof temperature,
  hugeNumber: typeof hugeNumber,
  isActive: typeof isActive,
  notDefined: typeof notDefined,
  emptyValue: typeof emptyValue,
  uniqueKey: typeof uniqueKey,
  user: typeof user,
  items: typeof items,
  greet: typeof greet,
  mapa: typeof mapa,
  conjunto: typeof conjunto,
  now: typeof now,
  regex: typeof regex,
});
