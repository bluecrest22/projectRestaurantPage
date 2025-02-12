import dominicanImage from "./images/dominicanFood.png";

export function homePage() {
    const container = document.querySelector("#content");
    const contentDiv = document.createElement("div");
    container.appendChild(contentDiv);

    //<h1>Welcome to Viorel's Restaurant</h1>
    const header = document.createElement("h1");

    const headerText = "Welcome to Viorel's Restaurant";
    const headerTextNode = document.createTextNode(headerText);

    
    header.appendChild(headerTextNode);
    contentDiv.appendChild(header);

    {/* <p>We provide the best dominican food in the city of Jacksonville.</p> */}
    const para = document.createElement("p");

    const paraText = "We provide the best dominican food in the city of Jacksonville.";
    const paraTextNode = document.createTextNode(paraText);

    para.appendChild(paraTextNode);
    contentDiv.appendChild(para);

    {/* <img src="dominicanFood.png" alt="Picture of Dominican Food" height="300" width="auto"> */}
    const image = document.createElement("img");
    image.src = dominicanImage;
    image.width = "600";
    image.height = "400";
    contentDiv.appendChild(image);
}