// Función que calcula el factorial de un número
function factorial(numero) {
  // Si el número es negativo, el factorial no está definido
  if (numero < 0) return undefined;

  // El factorial de 0 y 1 siempre es 1
  if (numero === 0 || numero === 1) return 1;

  // Variable donde guardaremos el resultado
  let resultado = 1;

  // Bucle que multiplica todos los números desde 2 hasta 'numero'
  for (let i = 2; i <= numero; i++) {
    resultado *= i; // Multiplicamos el resultado por el número actual
  }

  // Devolvemos el resultado final
  return resultado;
}

// 🧪 Ejemplos de uso:
console.log(factorial(5));  // 120 (5 * 4 * 3 * 2 * 1)
console.log(factorial(0));  // 1
console.log(factorial(10)); // 3628800
