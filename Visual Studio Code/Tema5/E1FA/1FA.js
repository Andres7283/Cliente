window.addEventListener("DOMContentLoaded", (e) => {
  async function fetchData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/5"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json(); // Espera y procesa el JSON
      console.log(json); // Muestra los datos obtenidos
    } catch (error) {
      console.error("Error al realizar la solicitud:", error); // Manejo de errores
    }
  }
});
