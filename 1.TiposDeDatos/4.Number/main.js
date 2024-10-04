
// 1.Tipo de dato entero y decimal 
    /*Dentro de JavaScript no hay distincion entre los tipos de datos 
    numericos decimales o enteros*/

let entero = 15 
let decimal = 15.5 
// Para saber que tipo de dato es una variable usamos typeof
console.log(typeof entero , typeof decimal); /* number, number */



// ----------------------------------------------------------------

// 2.Notacion Cientifica
const cientifica = 5e3;/* Salida:5000*/

// 3.Infinitos y NaN
const infinito = Infinity
const NoesNumero = NaN


// ---------------- 4.OPERACIONES ARITMETICAS -------------------------- 

// 1.  Suma,Resta,Multiplicacion,Division
let suma = 1 + 2 /* Salida = 3 */
let resta = 2-1 /* Salida = 1 */
let multiplicacion = 1 * 2 /* Salida = 2 */
let division = 2 / 2 /* Salida = 1 */
    console.log(suma,resta,multiplicacion,division);


//  -------------5.MODULO Y EXPONENCIACION --------------------------------
let modulo = 15 % 8 /* Salida = 7*/
let Exponenciacion = 2**3 /* Salida = 8 */
    console.log(modulo,Exponenciacion);

// -----------------------------------------------------------------------


// -----------------5. PRECISION ---------------------------------------
let resultado = 0.1 + 0.2
console.log(resultado); /* Salida= 0.30000000000000004 */

/* Para que nuestro numero decimal no se mire asi 
como en la salida de el anterior numero usamos 
.toFixed(Aqui van los numeros que queremos que vayan despues del punto) */
console.log(resultado.toFixed(1));

// ----------------------OPERACIONES AVANZADAS-------------------------------
let RaizCuadrada = Math.sqrt(16)
console.log(RaizCuadrada);
// ----------------------------------
let ValorAbsoluto = Math.abs(-7)
console.log(ValorAbsoluto);
// ----------------------------------

/*En este ejemplo de numero random utilizo el metodo .random para que genere
un numero aletorio y despues por la consola hago que me de un numero decimal 
cn un solo numero despues del punto o la coma */
let NumeroAleatorio = Math.random() 
console.log(NumeroAleatorio.toFixed(1));


















