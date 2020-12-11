import { baseUrl } from "../settings/api.js";
import { getToken } from "../utils/loginStorage.js";

export default function deleteButton (id) {

    const deleteContainer = document.querySelector(".delete-container");

    deleteContainer.innerHTML = `<button type="button" class="delete">Delete</button>`;

    const button = document.querySelector("button.delete");

    button.onclick = async function() {
        console.log(id);

        const doDelete = confirm("Are you sure you want to delete this article?");
        console.log(doDelete);

        if(doDelete) {
            const url = baseUrl + "articles/" + id;

            const token = getToken();
    
            const options = {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
    
            try {
                const response = await fetch(url, options);
                const json = await response.json();

                location.href = "index.html";
    
                console.log(json);
            } catch(error) {
                console.log(error);
            }
        }


    };
}