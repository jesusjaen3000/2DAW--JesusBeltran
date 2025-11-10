// Función que cuenta cuántas vocales tiene una cadena
function contarVocales(cadena) {
  const vocales = "aeiouAEIOU"; // Lista de vocales
  let contador = 0;

  // Recorremos cada caracter de la cadena
  for (let char of cadena) {
    if (vocales.includes(char)) contador++;
  }

  return contador;
}

// Ejemplo de uso:
console.log(contarVocales("Hola mundo")); // 4
