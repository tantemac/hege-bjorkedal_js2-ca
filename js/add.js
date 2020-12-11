import { displayMessage } from "./components/displayMessage.js";
import createMenu from "./components/createMenu.js";
import { getToken } from "./utils/loginStorage.js";
import { baseUrl } from "./settings/api.js";

createMenu();

const form = document.querySelector(".addForm");
const title = document.querySelector("#title");
const summary = document.querySelector("#summary");
const author = document.querySelector("#author");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const titleValue = title.value.trim();
    const summaryValue = summary.value.trim();
    const authorValue = author.value.trim();

    if(titleValue.length === 0 || summaryValue.length === 0 || authorValue.length === 0) {
       return displayMessage("warning", "Please add something", ".message-container");
    }

    addArticle(titleValue, summaryValue, authorValue);
}

async function addArticle(title, summary, author) {
    const url = baseUrl + "articles";

    const data = JSON.stringify({ title: title, summary: summary, author: author });

    const token = getToken();

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if(json.created_at) {
            displayMessage("success", "Your article is added", ".message-container");
            form.reset();
        }

        if(json.error) {
            displayMessage("error", json.message, ".message-container");
        }

        console.log(json)

    } catch(error) {
        console.log(error)
        displayMessage("error", "An error occured", ".message-container");

    }

}