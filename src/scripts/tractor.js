// Define and export a plantSeeds func

import { addPlant, usePlants } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"



// Accept the year's planting plan as input 
export const plantSeeds = (yearlyPlan) => {
    // Iterate parent and child arrays 
    for (const plan of yearlyPlan) {
        for (const foodType of plan) {
            // As you iterate through, invoke corresponding factory function
            // Take that seed and add it to the array in field module (addPlant)
            if (foodType === "Asparagus") {
                const asparagusSeed = createAsparagus()
                addPlant(asparagusSeed)
            }
            else if (foodType === "Corn") {
                const cornSeed = createCorn()
                addPlant(cornSeed)
            }
            else if (foodType === "Potato") {
                const potatoSeed = createPotato()
                addPlant(potatoSeed)
            }
            else if (foodType === "Soybean") {
                const soybeanSeed = createSoybean()
                addPlant(soybeanSeed)
            }
            else if (foodType === "Sunflower") {
                const sunflowerSeed = createSunflower()
                addPlant(sunflowerSeed)
            }
            else if (foodType === "Wheat") {
                const wheatSeed = createWheat()
                addPlant(wheatSeed)
            }
        }

    }
    return usePlants()
}

