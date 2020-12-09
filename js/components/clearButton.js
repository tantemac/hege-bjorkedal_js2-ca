import { renderFavourites } from "../favourites.js";

export default function clearButton() {
    const clearBtn = document.querySelector("#clear");

    clearBtn.addEventListener("click", clearList);

    function clearList() {

        if(confirm("Are you sure you want to clear all your favourites?")) {

        localStorage.clear();

        renderFavourites();
        }
    }
}