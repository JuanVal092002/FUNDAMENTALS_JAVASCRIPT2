// Tipos de Datos String

//  Forma de concatenar en JavaScript
 // Con `` podemos concatenar = Concatenar es unir stings con cualquier tipo de dato 
let string1 = 'JavaScript'
let string2 = 'es lo mejor'
    let StringdeConcatenacion = `Hola,${string1}${string2}` 
    console.log(StringdeConcatenacion);


// Para saber el tamaño o la cantidad de letras que tiene un string usamos length 
let Frase = 'JavaScript es lo mejor del mundo'


// Cuando usamos .length el cuenta caracter por caracter incluyendo los espacios 
// Despues del toUpperCase ponemos los () para invocar el valor de de la funcion valor de la variable Frase
console.log(Frase.toUpperCase());


/* Cuando queremos imprimir algo en especifico de un string usamos substring usando 
el indice de inicio e indice de fin
Ejemplo: */
console.log(Frase.substring(0,10));






