// Create a variable that is an empty array 
let arrayOfPlants = []

// Create and export a function that takes seed object as input and pushes it to the array
export const addPlant = (seedObj) => {
    arrayOfPlants.push(seedObj)
}

// This function returns a copy of the array of plants
export const usePlants = () => {
    return arrayOfPlants
}

import { createCorn } from "./seeds/corn.js"

Array.isArray(createCorn)