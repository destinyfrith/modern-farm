// Define and export a plantSeeds func

import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

// Accept the year's planting plan as input 
export const plantSeeds = (plantingPlan) => {
    // Iterate parent and child arrays 
    for (const plan of plantingPlan)
        for (const foodType of plan)
            // As you iterate through, invoke corresponding factory function
            // Take that seed and add it to the array in field module (addPlant)
            if (foodType === "asparagus") {
                const asparagusSeed = createAsparagus()
                addPlant(asparagusSeed)
            }
            else if (foodType === "corn") {
                const cornSeed = createCorn()
                addPlant(cornSeed)
            }
            else if (foodType === "potato") {
                const potatoSeed = createPotato()
                addPlant(potatoSeed)
            }
            else if (foodType === "soybean") {
                const soybeanSeed = createSoybean()
                addPlant(soybeanSeed)
            }
            else if (foodType === "sunflower") {
                const sunflowerSeed = createSunflower()
                addPlant(sunflowerSeed)
            }
            else if (foodType === "wheat") {
                const wheatSeed = createWheat()
                addPlant(wheatSeed)
            }


}
