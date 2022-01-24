// Define and export a harvestPlants function
export const harvestPlants = (plantsArray) => {
    // return an array of seed objects
    let seedObjects = []
    for (const plant of plantsArray) {
        // on each plant, get the value of the output property
        if (plant.type === "Corn") {
            for (let i = 0; i < plant.output / 2; i++) {
                seedObjects.push(plant)
            }
            // Add seed object to the array
        } else {
            for (let i = 0; i < plant.output; i++) {
                seedObjects.push(plant)
            }
        }
    }
    return seedObjects
}
