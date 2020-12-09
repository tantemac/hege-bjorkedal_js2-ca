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
                                    <i class="far fa-heart"></i>
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
    console.log(event);
}

handleClick();

})();

