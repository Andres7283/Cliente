ventana = window.open("", "ventanita", "width = 700, height = 300");

let numero = ventana.prompt("Introduce un número entre el 1 y el 20: ");
ventana.close();

let lista = (num) => {
  let ul = "<ul>";

  for (let i = 1; i <= num; i++) {
    ul += `<li> ${i} </li>`;
  }

  ul += "</ul>";

  document.body.innerHTML += ul;
};

lista(parseInt(numero));
