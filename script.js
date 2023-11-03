//alert("Hola este es mi Javascript");

//let nombre = "Juan Camilo";
//nombre = "gregorio gregorito"; // si cambia valor

//var nombre1 = "Juan Camilo";
// se utiliza mas "let" pero es válido

//const my_name = "Juan Camilo";
// const no puede cambiar valor

//console.log(nombre);
//console.log(nombre1);
//console.log(my_name);

// SELECIONAR ELEMENTOS

// let contenidoTitulo = "Hola";

// let title = document.querySelector(".acerca-de h2" );
// title.innerHTML = contenidoTitulo;

//CONDICIONALES
//let textoTitulo = title.innerText;
//console.log(textoTitulo);

//if (textoTitulo == "HELLO THERE TO MY FIRST WEB SITE") {
//  title.innerHTML = "Otro";  
//} else {
//    console.log("no se umple")
//}

// FUNCIONES

//let palabra1 = "Cuento";
//let adje = "Buena";
//let tec = "sitios";

//let parrafo = document.querySelector(".p2");

//function changeText(palabra1, adje, tec) {
//  let content = 'Otros certificados que hasta la fecha ya ${word} es scum foundations y scrum master, una metodología ágil bastante útil para proyectos relacionados con lo que quiero especializarme. Desarrollo de páginas web entre otros proyectos tecnológicos.';

//  return content;
//};

//parrafo.innerText = changeText(word, adje, tec);


const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += ` ✋ El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});
