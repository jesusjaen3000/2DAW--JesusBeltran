// Función que invierte el orden de los caracteres de una cadena
function revertirCadena(cadena) {
  return cadena.split("").reverse().join(""); // Convertimos en array, invertimos y unimos
}

// Ejemplo de uso:
console.log(revertirCadena("Hola")); // aloH
