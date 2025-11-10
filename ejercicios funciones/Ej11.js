// Función que determina si una cadena es un palíndromo
function esPalindromo(cadena) {
  // Convertimos la cadena a minúsculas, eliminamos espacios y signos de puntuación
  const limpia = cadena.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Invertimos la cadena limpia
  const invertida = limpia.split('').reverse().join('');

  // Comparamos la cadena original con la invertida
  return limpia === invertida;
}

// 🧪 Ejemplos de uso:
console.log(esPalindromo("Anita lava la tina")); // true
console.log(esPalindromo("Hola mundo"));          // false
console.log(esPalindromo("¿Acaso hubo búhos acá?")); // true
