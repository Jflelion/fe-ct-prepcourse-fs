/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos deben ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   const arrayDePares = [];

   for (const clave in objeto) {
      arrayDePares.push([clave, objeto[clave]]);
   }

   return arrayDePares;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const charCount = {};

   for (let i = 0; i < string.length; i++) {
      const char = string.charAt(i);
      charCount[char] = (charCount[char] || 0) + 1;
   }

   // Ordenar el objeto por clave alfabéticamente
   const sortedCharCount = {};
   Object.keys(charCount).sort().forEach((key) => {
      sortedCharCount[key] = charCount[key];
   });

   return sortedCharCount;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   const uppercaseChars = [];
   const lowercaseChars = [];

   for (let i = 0; i < string.length; i++) {
      if (string[i] === string[i].toUpperCase()) {
         uppercaseChars.push(string[i]);
      } else {
         lowercaseChars.push(string[i]);
      }
   }

   return uppercaseChars.join('') + lowercaseChars.join('');
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al revés.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   const palabras = frase.split(' ');
   const palabrasAlReves = palabras.map((palabra) => palabra.split('').reverse().join(''));
   return palabrasAlReves.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicúa".
   // Caso contrario: "No es capicúa".
   // Tu código:
   const numeroStr = numero.toString();
   const numeroAlReves = numeroStr.split('').reverse().join('');

   if (numeroStr === numeroAlReves) {
      return "Es capicúa";
   } else {
      return "No es capicúa";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   return string.replace(/[abc]/g, '');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort((a, b) => a.length - b.length);
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   const interseccion = [];

   for (const num1 of array1) {
      if (array2.includes(num1) && !interseccion.includes(num1)) {
         interseccion.push(num1);
      }
   }

   return interseccion;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
