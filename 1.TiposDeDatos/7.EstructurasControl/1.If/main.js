/* ------if Se usa para ejecutar un bloque de código si la condición es verdadera. ------
   ---- else Se usa junto con if para ejecutar un bloque de código si la condición es falsa. ----
 */
// ----------------CONDICIONAL IF------------------------

/* En el siguiente codigo vemos que usamos if,else if y else. 
- If es para ver si se cumple la primera condicion
- if else es otra opcion verdadera osea si no se cumple el primer if
esta seria una opcion para cumplirse.
- else es la opcion negativa del condicional
*/
let nombre = 'Pablo'

if (nombre === 'Diego') {
    console.log("Hola Diego");
} else if (nombre === 'Pablo') {
    console.log('Hola Pablo');
} else{
    console.log("No es diego.");
}