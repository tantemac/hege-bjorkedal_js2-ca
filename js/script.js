import { baseUrl } from "./settings/api.js";
import { renderArticles } from "./utils/renderArticles.js";
import { searchArticles } from "./utils/searchArticles.js";
import { displayMessage } from "./components/displayMessage.js";
import createMenu from "./components/createMenu.js";


const articleUrl = baseUrl + "articles";

createMenu();

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

getDataFromAPI();