// Función que filtra los números pares de un array
function filtrarPares(arrayNumeros) {
  // Usamos el método .filter() para crear un nuevo array
  // Solo incluimos los números que son divisibles por 2 (números pares)
  return arrayNumeros.filter(num => num % 2 === 0);
}

// 🧪 Ejemplos de uso:
console.log(filtrarPares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(filtrarPares([11, 13, 17]));       // []
console.log(filtrarPares([10, 20, 30, 45]));   // [10, 20, 30]