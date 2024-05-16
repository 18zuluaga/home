let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");
let header = document.getElementById("head");
let user = document.getElementById("user");
let carrito = document.getElementById("carrito");
let input = document.getElementById("input_1");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  console.log(value);
  if (value < 114) {
    header.style.backgroundColor = "transparent";
    carrito.style.backgroundColor = "transparent";
    user.style.backgroundColor = "transparent";
    input.style.border = "none";

  } else {
    header.style.backgroundColor = "#f9f9f9";
    carrito.style.backgroundColor = "#298172";
    user.style.backgroundColor = "#298172";
    carrito.style.padding = "5px";
    user.style.padding = "5px";
    carrito.style.borderRadius = "50px";
    user.style.borderRadius = "50px";// Esto restaurará el color de fondo predeterminado
    input.style.border = "2px solid #298172";
  }
  text.style.marginTop = value * 2.5 + "px";
  leaf.style.left = value * 1.5 + "px";
  leaf.style.top = value * -1.5 + "px";
  hill1.style.top = value * 1 + "px";
  hill4.style.left = value * -1 + "px";
  hill5.style.left = value * 1 + "px";
});
