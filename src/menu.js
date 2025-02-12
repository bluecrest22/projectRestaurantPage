import beverages from './dishes/beverages.json';
import sides from './dishes/sides.json';
import mainDishes from './dishes/mainDishes.json';


export function menuPage() {
    const container = document.querySelector("#content");
    const contentDiv = document.createElement("div");
    container.appendChild(contentDiv);

    // Beverages Header
    secondaryHeaderComponent(contentDiv, "Beverages");

    // Beverages
    for(let i = 0; i < beverages.length; i++) {
        menuItemComponent(contentDiv, beverages[i]);
    }

    // Sides Header
    secondaryHeaderComponent(contentDiv, "Sides");

    // Sides
    for(let i = 0; i < sides.length; i++) {
        menuItemComponent(contentDiv, sides[i]);
    }

    // Main Dishes Header
    secondaryHeaderComponent(contentDiv, "Main Dishes");

    // Main Dishes
    for(let i = 0; i < mainDishes.length; i++) {
        menuItemComponent(contentDiv, mainDishes[i]);
    }
}

export function secondaryHeaderComponent(contentDiv, text) {
    const header = document.createElement("h2");
    const headerText = document.createTextNode(text);

    header.appendChild(headerText);
    contentDiv.appendChild(header);
}

function menuItemComponent(contentDiv, item) {
    // container Div
    const menuItemDiv = document.createElement("div");
    contentDiv.appendChild(menuItemDiv);

    // name header
    const nameHeader = document.createElement("h3");
    const nameHeaderText = document.createTextNode(item.name);

    nameHeader.appendChild(nameHeaderText);
    menuItemDiv.appendChild(nameHeader);

    // desc paragraph
    const descPara = document.createElement("p");
    const descParaText = document.createTextNode(item.desc);

    descPara.appendChild(descParaText);
    menuItemDiv.appendChild(descPara);

    // price paragraph
    const pricePara = document.createElement("p");
    const priceParaText = document.createTextNode(item.price);

    pricePara.appendChild(priceParaText);
    menuItemDiv.appendChild(pricePara);

    // image 
    const img = document.createElement("img");
    img.src = item.image;
    img.width = "100";
    img.height = "100";
    menuItemDiv.appendChild(img);
}