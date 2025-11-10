// Función que determina si un número es primo
function esPrimo(numero) {
  if (numero < 2) return false; // Los números menores que 2 no son primos

  // Revisamos si tiene divisores
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) return false; // Si se divide, no es primo
  }

  return true; // Si no tiene divisores, es primo
}

// Ejemplos de uso:
console.log(esPrimo(7)); // true
console.log(esPrimo(10)); // false
