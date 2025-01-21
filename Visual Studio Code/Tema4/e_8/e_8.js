window.addEventListener("DOMContentLoaded", (e) => {
  var link = document.getElementsByTagName("a");
  var href = link[0].getAttribute("href");

  alert(
    `Href = ${href}, ${window.getComputedStyle(link[0]).color} , ${
      window.getComputedStyle(link[0]).fontWeight
    }`
  );
});
