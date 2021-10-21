
import contact from './contact.css';

export default function(){
    const content=document.querySelector("#content");

    const contactContainer=document.createElement("div");
    const contactH1=document.createElement("h1");
    const contactInfo=document.createElement("p");

    contactContainer.classList.add("contact-container");
    
    contactH1.textContent="Contact Us";

    contactInfo.textContent="Do not hesitate to reach us on hahah@email.com or on phone: 012453657";

    content.innerHTML="";
    content.appendChild(contactContainer);
    contactContainer.append(contactH1,contactInfo);    


}