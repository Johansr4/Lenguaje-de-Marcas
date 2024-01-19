
document.addEventListener('DOMContentLoaded', function () {
   
    var nombreCompleto = "Juan\nSanchez";

    var parrafo = document.createElement('p');

    parrafo.textContent = nombreCompleto;

    document.body.appendChild(parrafo);
});
