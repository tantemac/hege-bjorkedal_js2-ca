import { getUsername } from "../utils/loginStorage.js";

export default function createMenu() {
    const { pathname } = document.location;

    const menuContainer = document.querySelector(".menu-container");

    const username = getUsername();

    let authLink = `<a href="login.html" class="${pathname === "/login.html" ? "active" : ""}">Log in</a>`

    if (username) {
        
        authLink = `<a href="add.html" class="${pathname === "/add.html" ? "active" : ""}">Add article</a>
                    <span>Hi ${username}</span>`;
    }

    console.log(username);

    menuContainer.innerHTML = `<div class="menu">
                                <a href="index.html" class="${pathname === "/index.html" ? "active" : ""}">Home</a>
                                <a href="favourites.html" class="${pathname === "/favourites.html" ? "active" : ""}">Favourites</a>
                                ${authLink}
                                </div>`
}