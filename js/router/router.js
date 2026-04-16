import { homeController } from "../controllers/homeController.js";
import { clearElement } from "../utils/dom.js";

// Starter routeren og lytter på URL ændringer
export function initRouter() {
    // Kører når hash ændres (fx #/products)
    window.addEventListener("hashchange", handleRoute);

    // Kører når siden loader første gang
    window.addEventListener("load", handleRoute);
}

// Håndterer routing (hvilken side der skal vises)
function handleRoute() {
    // Tømmer indholdet i root elementet
    clearElement('root');

    // Henter hash fra URL (fx #/products)
    const hash = window.location.hash || "#/";

    // Fjerner "#/" fra starten
    const cleanHash = hash.replace(/^#\/?/, "");

    // Splitter URL i dele (fx "products/1" → ["products", "1"])
    const segments = cleanHash.split("/").filter(Boolean);

    // Hvis ingen route → vis forsiden
    if (segments.length === 0) {
        homeController();
        return;
    }

    // Hvis route ikke findes → vis fejl
    document.querySelector("#root").innerHTML =
        `<h1 class="text-2xl font-bold">Side ikke fundet</h1>`;
}