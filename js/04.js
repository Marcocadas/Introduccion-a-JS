// Strings o Cadenas de texto
const producto= "Monitor de 20 Pulgadas"; //Forma más común
const producto2= String('Monitor 30 Pulgadas');//Utilizamos un constructor para definir el tipo de variable
const producto3 = new String('Monitor de 50 pulgadas'); //Creamos un objeto String

console.log(typeof producto);
console.log(typeof producto2);
console.log(typeof producto3);

//Metodos para String
const tweet="Estoy aprendiendo a programar el JavaScript";
const producto4= "Monitor HD";

//length: Muestra la cantidad de caracteres dentro de la cadena de texto
console.log(tweet.length);
console.log(producto4.length);

//indexof Muestra si existe una palabra y la ubicación de dicha palabra o caracter
console.log(tweet.indexOf("aprendiendo"));
console.log(producto4.indexOf("Tablet"));

//Includes Muestra si existe o no una palabra o un caracter, devuelve un booleano
console.log(tweet.includes("aprendiendo"));
console.log(producto4.includes("Tablet"));

