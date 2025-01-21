function inicio() {
  // Obtener el formulario
  const formulario = document.getElementById("formulario");
  // Asignar la función de validación al evento "submit"
  formulario.onsubmit = (event) => {
    // Limpiar mensaje de error al empezar a validar
    const resultado = document.getElementById("resultado");
    resultado.textContent = "";

    // Validación de campo "Nombre"
    const nombre = document.getElementById("nombre").value.trim();
    if (nombre === "") {
      resultado.textContent = "Por favor, ingrese su nombre.";
      event.preventDefault();
      return;
    }

    // Validación de campo "Apellidos"
    const apellidos = document.getElementById("apellidos").value.trim();
    if (apellidos === "") {
      resultado.textContent = "Por favor, ingrese sus apellidos.";
      event.preventDefault();
      return;
    }

    // Validación de campo "Edad"
    const edad = document.getElementById("edad").value.trim();
    if (edad === "") {
      resultado.textContent = "Por favor, ingrese su edad.";
      event.preventDefault();
      return;
    }
    if (isNaN(edad) || edad < 0 || edad > 105) {
      resultado.textContent = "La edad debe ser un número entre 0 y 105.";
      event.preventDefault();
      return;
    }

    // Validación de campo "Provincia"
    const provincia = document.getElementById("provincia").value;
    if (provincia === "0") {
      resultado.textContent = "Por favor, seleccione una provincia.";
      event.preventDefault();
      return;
    }

    // Confirmación de envío
    const confirmar = confirm("¿Desea enviar el formulario?");
    if (!confirmar) {
      event.preventDefault(); // Detener envío si el usuario cancela
    }
  };
}
window.addEventListener("DOMContentLoaded", inicio);
