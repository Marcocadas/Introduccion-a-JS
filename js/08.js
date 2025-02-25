const nombre = 'Marcos';
const email = 'correo@correo.cl'

//Concatenación
//Con +
console.log('Nombre cliente: ' + nombre + ' - ' + 'Correo electrónico: ' + email);
//Con ,
console.log('Nombre cliente: ' , nombre , ' - ' , 'Correo electrónico: ' , email);

//Template Strings - Strings Literales
//IMPORTANTE: LOS STRINGS TEMPLATES SOLO SE UTILIZAN CON LAS COMILLAS INVERTIDAS.
console.log(`Nombre cliente: ${nombre} - Correo electrónico: ${email}`);