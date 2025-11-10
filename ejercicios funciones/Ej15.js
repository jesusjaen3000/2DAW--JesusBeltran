// Función que devuelve todas las combinaciones posibles de los caracteres de una cadena
function combinaciones(cadena) {
  const resultados = [];

  // Función recursiva que genera combinaciones
  function generar(prefijo, resto) {
    if (prefijo) resultados.push(prefijo); // Agregamos la combinación actual
    for (let i = 0; i < resto.length; i++) {
      generar(prefijo + resto[i], resto.slice(i + 1));
    }
  }

  generar('', cadena);
  return resultados;
}

// 🧪 Ejemplos de uso:
console.log(combinaciones("abc"));
// ["a", "ab", "abc", "ac", "b", "bc", "c"]

console.log(combinaciones("ab"));
// ["a", "ab", "b"]
