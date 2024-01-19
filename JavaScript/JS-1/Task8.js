document.addEventListener("DOMContentLoaded", function() {
    mostrarFechaYHora();
});

function mostrarFechaYHora() {
    var fechaActual = new Date();

    var mensaje = `Dia del mes: ${fechaActual.getDate()}
Dia de la semana: ${obtenerNombreDiaSemana(fechaActual.getDay())}
Mes: ${obtenerNombreMes(fechaActual.getMonth())}
Año: ${fechaActual.getFullYear()}
Hora: ${fechaActual.getHours()}
Minutos: ${fechaActual.getMinutes()}
Segundos: ${fechaActual.getSeconds()}`;

    document.body.innerText = mensaje;
}

function obtenerNombreDiaSemana(numeroDia) {
    var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado"];
    return diasSemana[numeroDia];
}

function obtenerNombreMes(numeroMes) {
    var nombresMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    return nombresMeses[numeroMes];
}
