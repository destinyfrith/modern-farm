// console.log("Welcome to the main module")

// Import createPlan from plan.js
import { addPlant } from "./field.js";
import { createPlan } from "./plan.js";

// Invoke the above function by calling on it with a new variable
const yearlyPlan = createPlan()

// below are checking to see if seeds are working
// import { createAsparagus } from "./seeds/asparagus.js"

// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)

// import { createCorn } from "./seeds/corn.js";
// const cornSeed = createCorn()
// console.log(cornSeed)


// Create a seed object
const seedObj = {
    type: "seed object",
    height: 2,
    output: 5


};

// import functions from other pages to invoke below
import { usePlants } from "./field.js"

// Invoke addPlant and specify seed obj as argument
let addingPlant = addPlant(seedObj)

// Invoke usePlants and store its return in variable
let usingPlants = usePlants()

console.log(usingPlants)
