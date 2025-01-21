inicio = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.json");
  xhr.send();
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("exito");
    }
    let json = JSON.parse(xhr.responseText);
    console.log(json);
    students = json.students;
    const $tbody = document.getElementsByTagName("tbody");
    students.forEach((e) => {
      const tr = document.createElement("tr");
      const id = document.createElement("td");
      id.innerHTML = e.id;
      tr.appendChild(id);

      const name = document.createElement("td");
      name.innerHTML = e.nombre;
      tr.appendChild(name);

      const notas = document.createElement("td");
      e.notas.forEach((a) => {
        notas.innerHTML += a + " ";
      });
      tr.appendChild(notas);

      const media = document.createElement("td");
      let r = 0;
      e.notas.forEach((a) => {
        r += a;
      });
      media.innerHTML = r / 4;
      tr.appendChild(media);

      $tbody[0].appendChild(tr);
    });
  });
};
window.addEventListener("DOMContentLoaded", inicio);
