// Función que ordena un array de números de menor a mayor sin usar .sort()
function ordenarArray(array) {
  // Usamos el método de ordenamiento burbuja (Bubble Sort)
  const arr = [...array]; // Hacemos una copia del array original

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // Si el elemento actual es mayor que el siguiente, los intercambiamos
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// 🧪 Ejemplos de uso:
console.log(ordenarArray([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
console.log(ordenarArray([10, -2, 7, 4]));  // [-2, 4, 7, 10]
