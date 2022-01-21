// Create a variable that is an empty array 
let arrayOfPlants = []

// Create and export a function that takes seed object as input and pushes it to the array
export const addPlant = (seedObj) => {
    // Investigate the Array.isArray method for corn 
    if (seedObj === Array.isArray(seedObj)) {
        for (const corn of seedObj) {
            arrayOfPlants.push(corn)
        }
    }
    else {
        arrayOfPlants.push(seedObj)
        return seedObj
    }
}

// This function returns a copy of the array of plants
export const usePlants = () => {
    const newPlantArray = arrayOfPlants.map(seedObj => ({ ...seedObj }))
    return newPlantArray
}