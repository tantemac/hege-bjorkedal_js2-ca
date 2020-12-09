import { baseUrl } from "./settings/api.js";
import { getExistingFavs } from "./utils/getFavourites.js";

const articleUrl = baseUrl + "articles";
const articleContainer = document.querySelector(".apiContainer");

const favourites = getExistingFavs();

(async function () {
    try {
        const response = await fetch(articleUrl);
        const json = await response.json();

        articleContainer.innerHTML ="";

        json.forEach(function (article) {

            let cssClass = "far";

            const doesObjectExist = favourites.find(function (fav) {
                console.log(fav);

                return parseInt(fav.id) === article.id;
            });

            console.log (doesObjectExist);

            if (doesObjectExist) {
                cssClass = "fas";
            }

            articleContainer.innerHTML += `<div class="article">
                                    <h4>${article.title}</h4>
                                    <p>Author: ${article.author}</p>
                                    <p class="summarytitle">Summary:</p>
                                    <p class="summary">${article.summary}</p>
                                    <i class="${cssClass} fa-heart" data-id="${article.id}" data-title="${article.title}"></i>
                                    </div>`
        });

    } catch (error) {
        console.log(error);
    }

    const favButtons = document.querySelectorAll(".article i");

    console.log(favButtons);

    favButtons.forEach((button) => {
        button.addEventListener("click", handleClick);
    });

    function handleClick() {

        this.classList.toggle("fas");
        this.classList.toggle("far");

        const id = this.dataset.id;
        const title = this.dataset.title;

        const currentFavs = getExistingFavs();

        const articleExist = currentFavs.find(function (fav) {
            return fav.id === id;
        });

        if (articleExist === undefined) {
            const article = { id: id, title: title };
            currentFavs.push(article);
            saveFavs(currentFavs);
        } else {
            const newFavs = currentFavs.filter((fav) => fav.id !== id);
            saveFavs(newFavs);
        }
    }

    function saveFavs(favs) {
        localStorage.setItem("favourites", JSON.stringify(favs));
    }

})();