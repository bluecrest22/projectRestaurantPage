import contacts from './contacts/contacts.json';
import { secondaryHeaderComponent } from "./menu";


export function contactPage() {
    const container = document.querySelector("#content");
    const contentDiv = document.createElement("div");
    container.appendChild(contentDiv);

    // Contact us Header
    secondaryHeaderComponent(contentDiv, "Contact Us");

    // Contacts
    for(let i = 0; i < contacts.length; i++) {
        contactComponent(contentDiv, contacts[i]);
    }
    
}

function contactComponent(contentDiv, contact) {
    // container Div
    const contactDiv = document.createElement("div");
    contentDiv.appendChild(contactDiv);

    // name header
    const nameHeader = document.createElement("h3");
    const nameHeaderText = document.createTextNode(contact.name);

    nameHeader.appendChild(nameHeaderText);
    contactDiv.appendChild(nameHeader);

    // title paragraph
    const titlePara = document.createElement("p");
    const titleParaText = document.createTextNode(contact.title);

    titlePara.appendChild(titleParaText);
    contactDiv.appendChild(titlePara);

    // phone paragraph
    const phonePara = document.createElement("p");
    const phoneParaText = document.createTextNode(contact.phone);

    phonePara.appendChild(phoneParaText);
    contactDiv.appendChild(phonePara);

    // email paragraph
    const emailPara = document.createElement("p");
    const emailParaText = document.createTextNode(contact.email);

    emailPara.appendChild(emailParaText);
    contactDiv.appendChild(emailPara);
}