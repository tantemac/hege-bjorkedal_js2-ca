import { getExistingFavs } from "./utils/getFavourites.js";

const favourites = getExistingFavs();

const articleContainer = document.querySelector(".favouritesContainer");

if (favourites.length === 0) {
    articleContainer.innerHTML = "You have no favourites yet.";
}

favourites.forEach(favourite) => {
    articleContainer.innherHTML += `
                                    
                                    `
}