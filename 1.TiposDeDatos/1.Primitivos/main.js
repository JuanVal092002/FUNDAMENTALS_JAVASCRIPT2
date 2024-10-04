/* Para correr un codigo o hacer debugging en JavaScript usamos el siguiente codigo 
  node (NombreArchivo.js) -Ejemplo mi archivo se llama main seria  node main.js */

/*Consejo: Cada vez que vayamos a definir una variable lo mejor es ser lo mas especificos 
  posibles para que despues sepamos o las demas personas sepan de que es la variable */


//   DATOS PRIMITIVOS

// Tipo de Dato String
let Nombre = "Juan"
console.log(Nombre);

// Tipo de Dato Number 
let edad = 25;

// Tipo de Dato Boolean  
let esMayorEdad = true;


// Tipo de Dato null
  // En cambio este tipo de dato lo ponemos nosotros para indicar que ese campo es vacio o nullo
let noHayValor= null;

// Tipo de Dato undefined
 /* Importante: Como tal el valor undefined no lo ponemos nosotros es el mismo JavaScript 
  el cual nos arroja este valor cuando algo no esta definido */ 
let NoDefinido = undefined;

// Tipo de Dato Symbol o simbolo 
  // Lo utilizamos para indicar que algo es unico por ejemplo un _id de un usuario
let simboloUnico = Symbol('Unico') 
console.log(simboloUnico);


// Tipo de Dato BigInt
  // El tipo de dato BigInt es recomendable usarlo cuando un numero es mayor a 17 caracteres
let numeroGrande = 2n
console.log(numeroGrande);






