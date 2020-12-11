import { baseUrl } from "./settings/api.js";
import { displayMessage } from "./components/displayMessage.js";
import createMenu from "./components/createMenu.js";
import { getToken } from "./utils/loginStorage.js";
import deleteButton from "./components/deleteButton.js";

createMenu();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
    document.location.href = "/index.html";
}

const articleUrl = baseUrl + "articles/" + id;

const form = document.querySelector("form");
const title = document.querySelector("#title");
const summary = document.querySelector("#summary");
const author = document.querySelector("#author");
const idInput = document.querySelector("#id");
const message = document.querySelector(".message-container");
const loading = document.querySelector(".loading");

(async function () {
    try {
        const response = await fetch(articleUrl);
        const details = await response.json();

        title.value = details.title;
        summary.value = details.summary;
        author.value = details.author;
        idInput.value = details.id;

        deleteButton(details.id);

        console.log(details);
    } catch (error) {
        console.log(error);
    } finally {
        loading.style.display = "none";
        form.style.display = "block";
    }
})();

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();
    
    message.innerHTML = "";

    const titleValue = title.value.trim();
    const summaryValue = summary.value.trim();
    const authorValue = author.value.trim();
    const idValue = idInput.value;

    if (titleValue.length === 0 || summaryValue.length === 0 || authorValue.length === 0) {
        return displayMessage("warning", "Please supply proper values", ".message-container");
    }

    updateArticle(titleValue, summaryValue, authorValue, idValue);
}

async function updateArticle(title, summary, author, id) {
    const url = baseUrl + "articles/" + id;
    const data = JSON.stringify({ title: title, summary: summary, author: author });

    const token = getToken();

    const options = {
        method: "PUT",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);

        if (json.updated_at) {
            displayMessage("success", "Article updated", ".message-container");
        }

        if (json.error) {
            displayMessage("error", json.message, ".message-container");
        }
    } catch (error) {
        console.log(error);
    }
}