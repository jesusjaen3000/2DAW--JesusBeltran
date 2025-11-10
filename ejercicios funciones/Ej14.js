// Función que cuenta cuántas veces aparece cada carácter en una cadena (sin espacios)
function contarCaracteres(cadena) {
  const conteo = {};

  // Eliminamos espacios
  const sinEspacios = cadena.replace(/\s/g, '');

  // Recorremos cada carácter
  for (let char of sinEspacios) {
    // Si el carácter ya existe en el objeto, aumentamos el conteo
    // Si no, lo inicializamos en 1
    conteo[char] = (conteo[char] || 0) + 1;
  }

  return conteo;
}

// 🧪 Ejemplos de uso:
console.log(contarCaracteres("hola mundo"));
// { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }

console.log(contarCaracteres("análisis"));
// { a: 2, n: 1, á: 1, l: 1, i: 2, s: 1 }
