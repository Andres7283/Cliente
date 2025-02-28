const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users/5");
xhr.send();
xhr.addEventListener("readystatechange", (e) => {
  if (xhr.readyState !== 4) return;
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log("éxito");
  }
  let json = JSON.parse(xhr.responseText);
  console.log(json);

  const $div = document.getElementById("div");

  const name = document.createElement("p");
  name.innerHTML = "Nombre = " + json.name;
  $div.appendChild(name);

  const username = document.createElement("p");
  username.innerHTML = "Usuario = " + json.username;
  $div.appendChild(username);

  const email = document.createElement("p");
  email.innerHTML = "Correo = " + json.email;
  $div.appendChild(email);

  const direccion = document.createElement("p");
  direccion.innerHTML = `Direccion : <br> Street = ${json.address.street} <br> Suite = ${json.address.suite} <br> City = ${json.address.Gwenborough}`;
  $div.appendChild(direccion);
});
