/* 
1. AND (&&)
Devuelve true si ambas condiciones son verdaderas.

2. OR (||)
Devuelve true si al menos una condición es verdadera.

3. NOT (!)
Invierte el valor: true se convierte en false y viceversa.
*/

const a = 10;
const b = 20;
const c = "10";

// console.log(a==b && a===c);

// console.log(a!= b || a===c );


/* En este caso a y c no son estrictamente iguales por lo que da False
Pero cuando queremos convertir un false a un True hacemos lo siguiente
!(a===c)
*/
console.log(!(a===c));




