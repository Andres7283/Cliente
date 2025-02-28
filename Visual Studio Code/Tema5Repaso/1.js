const cargarUsuario = () => {
  // Crear una instancia de XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // Configurar la solicitud
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users/5", true);

  // Configurar la función de devolución de llamada cuando la solicitud se complete
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return; // Esperamos hasta que la solicitud esté completa

    var datos = document.getElementById("datos");

    if (xhr.status >= 200 && xhr.status < 300) {
      // La solicitud fue exitosa
      let usuario = JSON.parse(xhr.responseText);
      mostrarUsuario(usuario);
    } else {
      // Hubo un error en la solicitud
      datos.innerHTML = "<p style='color: red;'>Error al cargar el usuario</p>";
    }
  };

  // Manejo de errores de red
  xhr.onerror = function () {
    document.getElementById("datos").innerHTML =
      "<p style='color: red;'>Error de red</p>";
  };

  // Enviar la solicitud
  xhr.send();
};

// Función para mostrar los datos del usuario en la página
const mostrarUsuario = (usuario) => {
  var datos = document.getElementById("datos");
  datos.innerHTML = ""; // Limpiar contenido previo

  let nombre = document.createElement("p");
  nombre.innerHTML = `<strong>Nombre:</strong> ${usuario.name}`;

  let username = document.createElement("p");
  username.innerHTML = `<strong>Usuario:</strong> ${usuario.username}`;

  let correo = document.createElement("p");
  correo.innerHTML = `<strong>Correo:</strong> ${usuario.email}`;

  let direccion = document.createElement("p");
  direccion.innerHTML = `<strong>Dirección:</strong> ${usuario.address.street}, ${usuario.address.city}`;

  // Agregar los elementos al div
  datos.appendChild(nombre);
  datos.appendChild(username);
  datos.appendChild(correo);
  datos.appendChild(direccion);
};

// Ejecutar la función cuando la página cargue
window.addEventListener("DOMContentLoaded", cargarUsuario);
