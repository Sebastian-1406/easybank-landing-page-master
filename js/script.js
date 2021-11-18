let botonMenu = document.getElementById("btnMenu");

const abrirMenu = () => {
    let nav = document.getElementById("nav");
    let menu = document.querySelector(".nav-menu");
    let icon = document.querySelector(".icon");
    
    nav.classList.toggle("menu-activo");

    if(nav.classList.contains("menu-activo")){
        menu.style.animationName = "desplazarBotton";
        icon.src = './images/icon-close.svg';
        icon.style.animationName = "giro360";
    }else {
        menu.style.animationName = "desplazarTop"
        icon.src = './images/icon-hamburger.svg'
        icon.style.animationName = "giro180"
    }
}

botonMenu.addEventListener("click", abrirMenu);