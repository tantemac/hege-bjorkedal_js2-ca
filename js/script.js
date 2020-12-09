import { baseUrl } from "./settings/api.js";
import { renderArticles } from "./utils/renderArticles.js";
import { searchArticles } from "./utils/searchArticles.js";
// import { getExistingFavs } from "./utils/getFavourites.js";
import { displayMessage } from "./utils/displayMessage.js";


const articleUrl = baseUrl + "articles";
// const articleContainer = document.querySelector(".apiContainer");

// const favourites = getExistingFavs();

const getDataFromAPI = async () => {
    try {
        const response = await fetch(articleUrl);
        const json = await response.json();

        // console.log(json);

        const articles = json;

        renderArticles(articles);
        searchArticles(articles);
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".apiContainer")
    }
};

// export function renderArticles(json) {

//     articleContainer.innerHTML = "";

//     json.forEach(function (article) {

//             let cssClass = "far";

//             const doesObjectExist = favourites.find(function (fav) {
//                 console.log(fav);

//                 return parseInt(fav.id) === article.id;
//             });

//             console.log (doesObjectExist);

//             if (doesObjectExist) {
//                 cssClass = "fas";
//             }

//         articleContainer.innerHTML += `<div class="article">
//                                         <h4>${article.title}</h4>
//                                         <p>Author: ${article.author}</p>
//                                         <p class="summarytitle">Summary:</p>
//                                         <p class="summary">${article.summary}</p>
//                                         <i class="${cssClass} fa-heart" data-id="${article.id}" data-title="${article.title}" data-author="${article.author}" data-summary="${article.summary}"></i>
//                                         </div>`;
//   });

//     const favButtons = document.querySelectorAll(".article i");

//     console.log(favButtons);

//     favButtons.forEach((button) => {
//         button.addEventListener("click", handleClick);
//     });

// }

// function handleClick() {

//     this.classList.toggle("fas");
//     this.classList.toggle("far");

//     const id = this.dataset.id;
//     const title = this.dataset.title;
//     const author = this.dataset.author;
//     const summary = this.dataset.summary;

//     const currentFavs = getExistingFavs();

//     const articleExist = currentFavs.find(function (fav) {
//         return fav.id === id;
//     });

//     if (articleExist === undefined) {
//         const article = { id: id, title: title, author: author, summary: summary};
//         currentFavs.push(article);
//         saveFavs(currentFavs);
//     } else {
//         const newFavs = currentFavs.filter((fav) => fav.id !== id);
//         saveFavs(newFavs);
//     }
// }

// function saveFavs(favs) {
//     localStorage.setItem("favourites", JSON.stringify(favs));
// }

getDataFromAPI();