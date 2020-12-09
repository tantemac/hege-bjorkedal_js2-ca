import { getExistingFavs } from "./getFavourites.js";
import { handleClick } from "./favouritesBtn.js";

const articleContainer = document.querySelector(".apiContainer");
const favourites = getExistingFavs();

export function renderArticles(json) {

    articleContainer.innerHTML = "";

    json.forEach(function (article) {

            let cssClass = "far";

            const doesObjectExist = favourites.find(function (fav) {
                // console.log(fav);

                return parseInt(fav.id) === article.id;
            });

            // console.log ("This object exist in localStorage", doesObjectExist);

            if (doesObjectExist) {
                cssClass = "fas";
            }

        articleContainer.innerHTML += `<div class="article">
                                        <h4>${article.title}</h4>
                                        <p>Author: ${article.author}</p>
                                        <p class="summarytitle">Summary:</p>
                                        <p class="summary">${article.summary}</p>
                                        <i class="${cssClass} fa-heart" data-id="${article.id}" data-title="${article.title}" data-author="${article.author}" data-summary="${article.summary}"></i>
                                        </div>`;
  });

    const favButtons = document.querySelectorAll(".article i");

    // console.log(favButtons);

    favButtons.forEach((button) => {
        button.addEventListener("click", handleClick);
    });

}