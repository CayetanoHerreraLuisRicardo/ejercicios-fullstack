
"use strict";
const count = function () {
  let val = 0;
  return function () {
    return val++;
  };
}();

console.log(count()); // outputs 0
console.log(count()); // outputs 1
console.log(count()); // outputs 2


/* La constate "count" es una función que se autoejecuta(se llama a si misma para inicializarse).
Dentro de esta función anónima se inicializa la valiable "val" en "0" que es el valor que tendra en un inicio en la primera llamada a la función, para la segunda llamada regresara el valor de "val" + 1.
*/