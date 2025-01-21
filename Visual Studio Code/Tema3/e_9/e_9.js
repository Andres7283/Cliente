inicio = () => {
  const nombreInput = document.getElementById("texto");
  const mostrarButton = document.getElementById("enviar");
  const resultadoDiv = document.getElementById("resultado");

  mostrarButton.addEventListener("click", () => {
    const nombre = nombreInput.value;

    resultadoDiv.innerHTML = `<p>${nombre}</p>`;

    nombreInput.value = "";
    nombreInput.focus();
  });
};

window.addEventListener("DOMContentLoaded", inicio);
