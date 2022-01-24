

// Define and export a catalog function 
// This function should accepted the harvested array as input
// Should iterate the array of food objects
export const Catalog = (harvestThePlants) => {
    // append the inner HTML
    let templateString = ""
    for (const plant of harvestThePlants) {
        templateString += `<section class="plant">${plant.type}</section>`
    }
    // This puts it in the inner HTML
    document.querySelector(".container").innerHTML += templateString
}