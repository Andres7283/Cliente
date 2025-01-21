let html;

let tabla = (filas = 10, columnas = 4) => {
  html = `<table border="solid">\n`;
  for (let index = 0; index < filas; index++) {
    html = html + "<tr>\n";
    for (let index2 = 0; index2 < columnas; index2++) {
      html = html + "<td style=>HOLA</td>\n";
    }
    html = html + "</tr>\n";
  }
  html = html + "</table>";
};

tabla(10, 4);
document.write(html);

tabla(20, 10);
document.write(html);
