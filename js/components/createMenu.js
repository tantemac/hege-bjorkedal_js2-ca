export default function createMenu() {

    const { pathname } = document.location;

    console.log(pathname);

    const menuContainer = document.querySelector(".menu-container");

    menuContainer.innerHTML = `<div class="menu">
                                <a href="index.html" class="${pathname === "/index.html" ? "active" : ""}">Home</a>
                                <a href="favourites.html" class="${pathname === "/favourites.html" ? "active" : ""}">Favourites</a>
                                <a href="login.html" class="${pathname === "/login.html" ? "active" : ""}">Log in</a>
                                </div>`
}