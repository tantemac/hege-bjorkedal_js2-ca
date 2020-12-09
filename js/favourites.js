import { getExistingFavs } from "./utils/getFavourites.js";

const favourites = getExistingFavs();

const articleContainer = document.querySelector(".apiContainer");

if (favourites.length === 0) {
    articleContainer.innerHTML = "You have no favourites yet.";
}

favourites.forEach((favourite) => {

    articleContainer.innherHTML += `<div class="article">
                                    <h4>${favourite.title}</h4>
                                    <p>Author: ${favourite.author}</p>
                                    <p class="summarytitle">Summary:</p>
                                    <p class="summary">${favourite.summary}</p>
                                    <i class="far fa-heart" data-id="${favourite.id}" data-title="${favourite.title}"></i>
                                    </div>`
                                    
});

    
    // let cssClass = "far";

    // const doesObjectExist = favourites.find(function (fav) {
    //     console.log(fav);

    //     return parseInt(fav.id) === favourite.id;
    // });

    // console.log (doesObjectExist);

    // if (doesObjectExist) {
    //     cssClass = "fas";
    // }
