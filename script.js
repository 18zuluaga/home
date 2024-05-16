let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");
let header = document.getElementById("head");
let user = document.getElementById("user");
let carrito = document.getElementById("carrito");
let input = document.getElementById("input_1");
let aboutSection = document.querySelector(".about");

// Calcula la posición vertical de la sección "About Us"
let aboutSectionPosition = aboutSection.offsetTop;

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  
  if (value < 114) {
    // Restaurar estilos cuando el usuario no ha alcanzado la sección "About Us"
    header.style.backgroundColor = "transparent";
    carrito.style.backgroundColor = "transparent";
    user.style.backgroundColor = "transparent";
    input.style.border = "none";
  } else {
    // Aplicar estilos cuando el usuario ha pasado cierta posición
    header.style.backgroundColor = "#f9f9f9";
    carrito.style.backgroundColor = "#298172";
    user.style.backgroundColor = "#298172";
    carrito.style.padding = "5px";
    user.style.padding = "5px";
    carrito.style.borderRadius = "50px";
    user.style.borderRadius = "50px";
    input.style.border = "2px solid #298172";
  }

  // Detener animaciones cuando el usuario alcanza la sección "About Us"
  if (value >= aboutSectionPosition) {
    return; // No hagas nada más si el usuario ha alcanzado la sección "About Us"
  }

  // Aplicar animaciones mientras el usuario no ha alcanzado la sección "About Us"
  text.style.marginTop = value * 2.5 + "px";
  leaf.style.left = value * 1.5 + "px";
  leaf.style.top = value * -1.5 + "px";
  hill1.style.top = value * 1 + "px";
  hill4.style.left = value * -1 + "px";
  hill5.style.left = value * 1 + "px";
});
