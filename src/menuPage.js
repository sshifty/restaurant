import quiona from '/images/QUIONA.jpg';
import chicken from './images/chicken.jpg';
import salmon from './images/salmon.png';

const foodMenu=(function(){
    const foods=[
        {
            name:'QUINOA UTTAPAM',
            desc:'Gluten Free Fermented Rice & Lentil Pancake, Heirloom Tomatoes, Coconut Chutney',
            price:10,
            src:quiona
        },
        {
            name:'SPICY FRIED CHICKEN SANDWICH',
            desc:'Green Peppercorn Brined Crispy Chicken, Toasted Brioche, Masala Fries',
            price:11,
            src:chicken
        },
        {
            name:'TANDOORI SALMON SALAD',
            desc:'Avocado, Oranges, Pressed Ricotta, Sprouted Mung, Crispy Quinoa, Mint Chutney',
            price:13,
            src:salmon
        }

    ];
    return foods;   
})();


export default function(){
    const content=document.querySelector("#content");
    const menuContainer=document.createElement('div');
    const menuH1=document.createElement('h1');
    
    
    menuH1.textContent="MENU";
    content.innerHTML="";
    content.appendChild(menuContainer);
    menuContainer.appendChild(menuH1);
    const items=[];
    for(let i=0;i<foodMenu.length;i++){
        items[i]=document.createElement('div');
        let name=document.createElement('h3');
        name.textContent=foodMenu[i].name;  
        console.log(name.textContent)      
        let desc=document.createElement('p');
        desc.textContent=foodMenu[i].desc;
        let price=document.createElement('p');
        price.textContent=foodMenu[i].price;
        let image=new Image();
        image.src=items[i].src;
       

        items[i].append(name,desc,price,image);
        menuContainer.appendChild(items[i]);

    }
    

}


