import { getExistingFavs } from "./utils/getFavourites.js";

const favourites = getExistingFavs();

const articleContainer = document.querySelector(".favouritesContainer");

if (favourites.length === 0) {
    articleContainer.innerHTML = "You have no favourites yet.";
}

favourites.forEach(favourite) => {
    articleContainer.innherHTML += `<div class="article">
                                    <h4>${article.title}</h4>
                                    <p>Author: ${article.author}</p>
                                    <p class="summarytitle">Summary:</p>
                                    <p class="summary">${article.summary}</p>
                                    <i class="${cssClass} fa-heart" data-id="${article.id}" data-title="${article.title}"></i>
                                    </div>`
                                    
}