let edad = parseInt(prompt("Ingresa tu edad:"));
let pais = prompt("Ingresa tu país:");

if (edad >= 15 && edad <= 35 && pais.toLowerCase() === "colombia") {
  console.log("La persona puede participar en el torneo.");
  console.warn("La persona puede participar en el torneo.");
  alert("La persona puede participar en el torneo.");
} else {
  console.log("La persona NO puede participar en el torneo.");
  console.warn("La persona NO puede participar en el torneo.");
  alert("La persona NO puede participar en el torneo.")
  
}
