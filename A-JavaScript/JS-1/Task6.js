try {
    var numero1 = 10;

    resultado = numero1 + numero2;
  
  } catch (error) {
    alert('Error: ' + error.message);
    console.error('Trace:', error.stack);
  
  } finally {
    alert('Bloque finally');
  }
  