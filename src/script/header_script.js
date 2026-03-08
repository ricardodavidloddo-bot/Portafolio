const boton = document.querySelector("#header_boton");
const icono1 = document.querySelector("#icono1");
const icono2 = document.querySelector("#icono2");

const nav = document.querySelector("#header_nav")

nav.classList.remove("nav_hidden");
icono2.classList.remove("boton2_hidden");


boton.addEventListener("click", ()=> {
    nav.classList.toggle("nav_hidden");
    icono2.classList.toggle("boton2_hidden");
    icono1.classList.toggle("boton1_hidden");
}

)