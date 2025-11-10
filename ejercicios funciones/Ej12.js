// Función que genera los primeros n números de la secuencia de Fibonacci
function fibonacci(n) {
  // Si n es 0 o negativo, devolvemos un array vacío
  if (n <= 0) return [];

  // Los dos primeros números de la secuencia son 0 y 1
  const secuencia = [0];

  if (n > 1) secuencia.push(1);

  // Calculamos los siguientes números sumando los dos anteriores
  for (let i = 2; i < n; i++) {
    const siguiente = secuencia[i - 1] + secuencia[i - 2];
    secuencia.push(siguiente);
  }

  return secuencia;
}

// 🧪 Ejemplos de uso:
console.log(fibonacci(1)); // [0]
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
