const NumeroSecreto = Math.floor(Math.random() * 10 + 1)

const NumeroJugador =parseInt(prompt("Adivina el numero secreto entre el 1 y el 10"))

console.log(`Este es el numero con el que juegas ${NumeroJugador}`);

if( NumeroJugador === NumeroSecreto){
console.log('Felicidades! Adivinaste el numero');
} else if (NumeroJugador > NumeroSecreto){
console.log('El numero es menor. Sigue intentando');
}
else if(NumeroJugador < NumeroSecreto) {
console.log('El numero es mayor. Sigue intentando');
}

console.log(NumeroSecreto);





