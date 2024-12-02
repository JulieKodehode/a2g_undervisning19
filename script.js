// General examples of the use of arrays:

// Flat Array:
const fruitBowl = ["Apple", "Pear", "Grapes"];

// Array methods:
fruitBowl.push("Banana");
fruitBowl.push("Orange");
fruitBowl.pop();

fruitBowl.unshift("Peach");
fruitBowl.unshift("Melon");
fruitBowl.unshift("Tomato");
fruitBowl.shift();

console.log(fruitBowl);
console.log(fruitBowl.toString());

// Undervisnings oppgave:
// Lag en variabel som lager en tom array
// Bruk array metodene .push() og .pop() for å legge til data i den tomme arrayen.

const vegetableGarden = [];

vegetableGarden.push("Potet");
vegetableGarden.push("Gulrot");
vegetableGarden.push("Kål");
vegetableGarden.push("Rosenkål");
vegetableGarden.pop();
vegetableGarden.push("Ert");

console.log(vegetableGarden);

//
console.log("_____________________________________");
//

// Hente inn elementer / Fetch elements
const inputField = document.querySelector("#inputField");
const addFront = document.querySelector("#addFront");
const removeFront = document.querySelector("#removeFront");
const addBack = document.querySelector("#addBack");
const removeBack = document.querySelector("#removeBack");
const outputField = document.querySelector("#outputField");

console.log(inputField, addFront, removeFront, addBack, removeBack, outputField);

const outputArray = [];

// Gir elementer hendelser / Give elements events

addFront.addEventListener("click", function () {
  console.log("Button clicked!");
  
  outputArray.unshift(inputField.value);

  console.log(outputArray);

  outputField.textContent = outputArray;
});
























/*
// Object with Arrays:
const biggerFruitBowl = {
  fruit: ["Apple", "Pear", "Grapes"],
  berries: ["Banana", "Strawberry"],
};

// Nested Arrays in Objects
const evenBiggerFruitBowl = {
  fruit: [
    { apple: ["Red apple", "Green Apple", "Yellow Apples"] },
    "Pear",
    "Grapes",
  ],
  berries: ["Banana", "Strawberry"],
};
*/
