document.getElementById("boton").addEventListener("click", () => {
  fetch("https://yesno.wtf/api")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("respuesta").innerText =
        data.answer.toUpperCase();
    })
    .catch((error) => {
      document.getElementById("respuesta").innerText =
        "Error al obtener respuesta";
      console.error(error);
    });
});
