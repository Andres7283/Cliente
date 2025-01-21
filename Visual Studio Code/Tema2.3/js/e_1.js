let f_actual = new Date();
let f_cumple = new Date(2004, 3, 2);
//1
document.write(`fecha actual `);
document.write(f_actual.toLocaleDateString());
document.write(`<br>fecha cumpleaños `);
document.write(f_cumple.toLocaleDateString());
//2
document.write(`<br> año cumpleaños `);
document.write(f_cumple.getFullYear());
document.write(`<br> año actual `);
document.write(f_actual.getFullYear());
//3
document.write(`<br>fecha actual con año del pasado `);
f_actual.setFullYear(2023);
document.write(f_actual.toLocaleDateString());
//4
let dia = f_actual.getDate();
let mes = f_actual.getMonth();
let año = f_actual.getFullYear();
document.write("<br>Dia mes y año actual " + dia + "/" + (mes + 1) + "/" + año);
