
export default function initialPage(){   
   const body=document.querySelector("body"); 
   const content=document.querySelector("#content");
   const header=document.createElement("header");
   const restaurantName=document.createElement("h1");
   const navDiv=document.createElement("div");
   const homeDiv=document.createElement("div");
   const menuDiv=document.createElement("div");
   const contactDiv=document.createElement("div");

   homeDiv.setAttribute("data-nav","home");
   homeDiv.classList.add("active");
   menuDiv.setAttribute("data-nav","menu");
   contactDiv.setAttribute("data-nav","contact");
  


    
    
    restaurantName.classList.add("h1-name");
    navDiv.classList.add("nav-container");    
    restaurantName.textContent="My Restaurant";
    homeDiv.textContent="Home";
    menuDiv.textContent="Menu";
    contactDiv.textContent="Contact";
    

    

        
    body.insertBefore(header,body.firstChild);
    header.append(restaurantName ,navDiv);
    navDiv.append(homeDiv,menuDiv,contactDiv);
    
    
    return [homeDiv,menuDiv,contactDiv]
};