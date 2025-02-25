//Orden de operaciones

//El orden de las operaciones funciona como se nos enseña en la escuela.
let resultado;
resultado = 20 + 30 * 2; //Prioridad multiplicación, luego sumas
resultado = (20 + 30) * 2; //Prioridad paréntecis, luego multiplicación.

//Supongamos que estamos ofreciendo un descuento del 20% o 0.2 en una compra, tenemos 3 compras, 100 200 y 300.
//En este caso hacemos la resta, el total de los productos menos el descuento, en el segundo paréntecis sacamos el valor del 20% del total.
resultado = (100+200+300)-((100+200+300) * .2);

//incrementos

let puntaje = 10;

//Incremento en 1 ++
// puntaje++; 
// //o
// ++puntaje;

//Decremento en 1 --

// puntaje--;
// --puntaje;

// console.log(puntaje);
console.log(resultado);

//También podemos hacer incrementos y decrementos al enviar datos a la consola, sin embargo debemos de poner el operador antes del nombre de la variable para que en consola
//se pueda visualizar el resultado con el incremento o decremento, como se ve a continuación:

// console.log(++puntaje);

//Ahora supongamos que estamos en un video juego y un enemigo nos dió mas de 1 punto, en ese caso usaríamos el siguiente incremento:

puntaje += 10;
console.log(puntaje);
