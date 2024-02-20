let ventanaNueva;

document.addEventListener('DOMContentLoaded', function () {
    inicializar();
});

function inicializar() {
    const btnCrearVentana = document.getElementById('crear-ventana');
    const btnCerrarVentana = document.getElementById('cerrar-ventana');

    btnCrearVentana.onclick = function () {
        crearNueva();
    };

    btnCerrarVentana.onclick = function () {
        cerrarNueva();
    };
}

function crearNueva() {
     ventanaNueva = window.open('https://www.cesurformacion.com/');
    
}

function cerrarNueva() {
      ventanaNueva.close(); 
        
  
}
