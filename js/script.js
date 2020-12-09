import { baseUrl } from "./settings/api.js";

const articleUrl = baseUrl + "articles";

(async function () {
    const container = document.querySelector(".apiContainer");

    try {
        const response = await fetch(articleUrl);
        const json = await response.json();

        container.innerHTML ="";

        json.forEach(function (article) {
            container.innerHTML += `<div class="article">
                                    <h4>${article.title}</h4>
                                    <p>Author: ${article.author}</p>
                                    <p class="summarytitle">Summary:</p>
                                    <p class="summary">${article.summary}</p>
                                    <i class="far fa-heart" data-id="${article.id}" data-title="${article.title}"></i>
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

function handleClick(event) {
    // console.log(event);
    this.classList.toggle("fas");
    this.classList.toggle("far");

    const id = this.dataset.id;
    const title = this.dataset.title;

    // console.log("id", id);
    // console.log("title", title);

    const currentFavs = getExistingFavs();
    // console.log(currentFavs);

    const articles = {id: id, title: title};

    currentFavs.push(articles);

    saveFavourites();
}

function getExistingFavs() {

    const favs = localStorage.getItem("favourites");

    // console.log(favs);

    if(!favs) {
        return [];
    } else {
        return JSON.parse(favs);
    }

    function saveFavourites (favs) {
        localStorage.setItems("favourites", JSON.stringify(favs));
    }

}



})();