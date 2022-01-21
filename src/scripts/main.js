// console.log("Welcome to the main module")

// Import createPlan from plan.js
import { addPlant } from "./field.js";
import { createPlan } from "./plan.js";


// Invoke the above function by calling on it with a new variable
const yearlyPlan = createPlan()
console.log(yearlyPlan)

// below are checking to see if seeds are working
// import { createAsparagus } from "./seeds/asparagus.js"

import { createAsparagus } from "./seeds/asparagus.js";
const asparagusSeed = createAsparagus()


import { createCorn } from "./seeds/corn.js";
const cornSeed = createCorn()


// Create a seed object
const seedObj = {
    type: "seed object",
    height: 2,
    output: 5
};

// import functions from other pages to invoke below
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js";

// Invoke addPlant and specify seed obj as argument
let addingPlant = addPlant(seedObj)

// Invoke usePlants and store its return in variable
let usingPlants = usePlants()

//Invoke function that plants seeds
let plantTheSeeds = plantSeeds()

// Import array from fields.js


console.log(usingPlants)
