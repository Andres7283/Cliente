window.addEventListener("DOMContentLoaded", (e) => {
  const usuario = 5;
  fetch("https://jsonplaceholder.typicode.com/users/" + usuario)
    .then((response) => response.json())
    .then((json) => {
      const $div = document.getElementById("div");

      const id = document.createElement("p");
      id.innerHTML = "ID: " + json.id;
      $div.appendChild(id);

      const nombre = document.createElement("p");
      nombre.innerHTML = "Nombre: " + json.name;
      $div.appendChild(nombre);

      const username = document.createElement("p");
      username.innerHTML = "Usuario: " + json.username;
      $div.appendChild(username);

      const correo = document.createElement("p");
      correo.innerHTML = "Correo: " + json.email;
      $div.appendChild(correo);

      const address = document.createElement("p");
      address.innerHTML = ` Address: ${json.address.street} ${json.address.suite} ${json.address.city}`;
      $div.appendChild(address);
    });
});
