pulsar = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.send();
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("éxito");
    }
    let json = JSON.parse(xhr.responseText);
    console.log(json);
    const $div = document.getElementById("tabla");
    let $table = document.createElement("table");
    let c = document.createElement("tr");
    let t = document.createElement("th");
    t.innerHTML = "Title";
    c.appendChild(t);
    let b = document.createElement("th");
    b.innerHTML = "Body";
    c.appendChild(b);
    $table.appendChild(c);

    json.forEach((el) => {
      let $tr = document.createElement("tr");

      let $td1 = document.createElement("td");
      $td1.innerHTML = el.title;

      let $td2 = document.createElement("td");
      $td2.innerHTML = el.body;

      $tr.appendChild($td1);
      $tr.appendChild($td2);

      $table.appendChild($tr);
    });
    $div.appendChild($table);
  });
};
inicio = () => {
  document.getElementById("b1").addEventListener("click", pulsar);
};

document.addEventListener("DOMContentLoaded", inicio);
