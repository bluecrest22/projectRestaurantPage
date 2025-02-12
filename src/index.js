import "./styles.css";
import { homePage } from "./home";
import { menuPage } from './menu';
import { contactPage } from './contact';

const container = document.querySelector("#content");
homePage();

// Home Page Button
const homeButton = document.querySelector(".home-button");
homeButton.addEventListener("click", function() {
    container.replaceChildren();
    homePage();
});

// Menu Page Button
const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function() {
    container.replaceChildren();
    menuPage();
});

// Contact Page Button
const contactButton = document.querySelector(".contact-button");
contactButton.addEventListener("click", function() {
    container.replaceChildren();
    contactPage();
});