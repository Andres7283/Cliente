inicio = () => {
  const provincias = document.getElementById("provincias");
  const enviar1 = document.getElementById("enviar1");

  enviar1.addEventListener("click", () => {
    const seleccion = "";
    for (let index = 0; index < array.length; index++) {
      if (!provincias[index].selectedIndex) {
        seleccion = provincias[index].value;
      }
    }
    alert(`Has seleccionado ${seleccion}`);
  });
};

window.addEventListener("DOMContentLoaded", inicio);
