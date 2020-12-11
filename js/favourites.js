import { getExistingFavs } from "./utils/getFavourites.js";
import clearButton from "./components/clearButton.js";
import createMenu from "./components/createMenu.js";

createMenu();

export function renderFavourites() {
    const favourites = getExistingFavs();
    clearButton();
    
    const articleContainer = document.querySelector(".apiContainer");
    
    if (favourites.length === 0) {
        articleContainer.innerHTML = "You have no favourites yet.";
    }
    
    favourites.forEach((favourite) => {

        articleContainer.innerHTML += `<div class="article">
                                        <h4>${favourite.title}</h4>
                                        <p>Author: ${favourite.author}</p>
                                        <p class="summarytitle">Summary:</p>
                                        <p class="summary">${favourite.summary}</p>
                                        <i class="fas fa-heart" data-id="${favourite.id}" data-title="${favourite.title}"></i>
                                        </div>`
                                        
    });
}
    
renderFavourites();
    

