
document.getElementById('boton').onclick = function() {
    console.log("capturamos el evento click")
    document.getElementById('agradecimientos').innerHTML = "¡Muchas gracias por su tiempo!"
}
function bigImg(foto) {
    foto.style.height = "300px";
    foto.style.width = "300px";
}
  
  function normalImg(foto) {
    foto.style.height = "128px";
    foto.style.width = "128px";
}