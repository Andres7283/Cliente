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

  $div.innerHTML += `<p> Nombre =  ${json.name} </p>`;
  $div.innerHTML += `<p> Usuario = ${json.username} </p>`;
  $div.innerHTML += `<p> Correo = ${json.email} </p>`;
  $div.innerHTML += `<p> Dirección = ${json.address.street} ${json.address.suite} ${json.address.city}`;
});

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
// xhr.send();
// xhr.addEventListener("readystatechange", (e) => {
//   if (xhr.readyState !== 4) return;
//   if (xhr.status >= 200 && xhr.status < 300) {
//     console.log("éxito");

//     let json = JSON.parse(xhr.responseText);
//     console.log(json);
//     json.forEach((el) => {
//       const $li = document.createElement("p");
//       $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
//       $fragment.appendChild($li);
//     });
//     $xhr.appendChild($fragment);
//   } else {
//     console.log("error");
//     let message = xhr.statusText || "Ocurrió un error";
//     $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
//   }
//   console.log("Este mensaje cargará de cualquier forma");
// });
