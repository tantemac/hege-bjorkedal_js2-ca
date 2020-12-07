import { baseUrl } from "./settings/api.js";

const articleUrl = baseUrl + "articles";

(async function () {
    const container = document.querySelector(".apiContainer");

    try {
        const response = await fetch(articleUrl);
        const json = await response.json();

        container.innerHTML ="";

        json.forEach(function (article) {
            container.innerHTML += `<div class="articleContainer">
                                    <h4>${article.title}</h4>
                                    <p>${article.author}</p>
                                    <p>${article.summary}</p>
                                    </div>`
        });
    } catch (error) {
        console.log(error);
    }
})();