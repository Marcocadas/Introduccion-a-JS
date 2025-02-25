//Objetos

//Son una parte fundamental de JavaScript y se usa en todo momento

//Los objetos están compuestos por variables, al estar dentro de un objeto estas se denominan propiedades.

//Por ejemplo


const nombreProducto = 'Monitor HD 20\"';
const precio = 300;
const disponible = true;

const producto = {
    nombreProducto: 'Monitor HD 20\"',
    precio: 300,
    disponible: true
}

console.log(producto); //En nuestra consola se verán todos los datos guardados dentro de nuestro objeto

//Ahora si queremos conseguir un solo dato del objeto podemos hacerlo de 2 formas

//Forma de punto

console.log(producto.precio);
console.log(producto.nombreProducto);
console.log(producto.disponible);

//Forma de corchete

console.log(producto["precio"]);
console.log(producto["nombreProducto"]);
console.log(producto["disponible"]);
