document.addEventListener('DOMContentLoaded', function () {
    var cuadradosContainer = document.getElementById('cuadrados-div');
  
    for (var i = 1; i <= 20; i++) {
      var cuadrado = i * i;
  
      var p = document.createElement('p');
      p.textContent = 'El cuadrado de ' + i + ' es ' + cuadrado;
  
      cuadradosContainer.appendChild(p);
    }
  });
  