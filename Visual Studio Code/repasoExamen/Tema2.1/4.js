const txt = "Hola Mundo";
console.log(txt.indexOf("Mundo"));
console.log(txt.replace("Mundo", "Universo"));
console.log(txt.toLocaleUpperCase());
console.log(txt.toLocaleLowerCase());

const nombre = "Andrés Avelino";
const apellido = "García Romero";
console.log(`${nombre} ${apellido}`);

const palabra = "Cliente";
console.log(palabra.substring(0, 3));
console.log(palabra.substring(palabra.indexOf("ente")));
