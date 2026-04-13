import { homeController } from "../controllers/homeController.js";
import { clearMain } from "../utils/index.js";

export function initRouter() {
    window.addEventListener("hashchange", handleRoute);
    window.addEventListener("load", handleRoute);
}

function handleRoute() {
    clearMain()

    const hash = window.location.hash || "#/";
    const cleanHash = hash.replace(/^#\/?/, "")
    const segments = cleanHash.split("/").filter(Boolean)

    if (segments.length === 0) {
        homeController();
        return;
    }

    // ["products"]
    if(segments[0] === "products") {
        if(segments.length === 2) {
            productsController(segments[1]);
            return;
        } else {
            productController(segments[2]);
            return;
        }
    }

    document.querySelector("#root").innerHTML = `<h1 class="text-2xl font-bold">Side ikke fundet</h1>`;
}