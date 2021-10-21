import initialPage from './initialPage';
import homePage from './homePage';
import menuPage from './menuPage';
import style from './style.css';

homePage();

(function(){
    function change(){
        if(this.dataset.nav==="home"){
            homePage();
            document.querySelector(`[data-nav="menu"]`).classList.remove("active");
            document.querySelector(`[data-nav="contact"]`).classList.remove("active");
            this.classList.add("active");
        }else if(this.dataset.nav==="menu"){
            menuPage();
            document.querySelector(`[data-nav="home"]`).classList.remove("active");
            document.querySelector(`[data-nav="contact"]`).classList.remove("active");
            this.classList.add("active");
        }else if(this.dataset.nav==="contact"){
            document.querySelector(`[data-nav="home"]`).classList.remove("active");
            document.querySelector(`[data-nav="menu"]`).classList.remove("active");
            this.classList.add("active");
            console.log("contact")
        }
    }
    const nav=initialPage();
    nav.forEach(key=>{
        key.addEventListener("click",change.bind(key))
    })
})();

