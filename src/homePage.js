import home from './home.css';

export default function () {
    const content=document.querySelector("#content");
    const pageContent = document.createElement("div");
    const restImage = document.createElement("img");
    const imageContainer = document.createElement("div");
    const homeDescription = document.createElement("div");
    const descHeader = document.createElement("h1");
    const descText = document.createElement("descText");

    content.innerHTML="";
    

    restImage.classList.add("restimage");
    pageContent.classList.add("pagecontent");
    imageContainer.classList.add("imagecontainer");
    homeDescription.classList.add("homedesc");
    descHeader.classList.add("desc-header");
    descText.classList.add("desc-text");

    descHeader.textContent = "Welcome!";
    descText.textContent = "The approach to the menu was easy. We had no interest in trying to reinvent food. We went with choices that were popular catering requests basic, down-home style just from a wide range of regions. We are known for our generous portions of BBQ, Southern, Cajun/Creole meals, plus a touch of Caribbean fun. We will tell you now save room for dessert! ";

    content.appendChild(pageContent);
    pageContent.appendChild(restImage);
    //pageContent.appendChild(imageContainer);
    pageContent.appendChild(homeDescription);
    homeDescription.append(descHeader, descText);
}