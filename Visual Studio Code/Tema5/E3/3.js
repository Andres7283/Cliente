obtenerRespuesta = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://yesno.wtf/api");
  xhr.send();
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("exito");
    }
    let json = JSON.parse(xhr.responseText);
    console.log(json);
    const p = document.getElementById("respuesta");
    if (json.answer == "yes") {
      p.innerHTML = "si";
    } else {
      p.innerHTML = "no";
    }
  });
};
inicio = () => {
  document.getElementById("b1").addEventListener("click", obtenerRespuesta);
};

window.addEventListener("DOMContentLoaded", inicio);
