let hora = prompt("¿Qué hora del día es? (mañana, tarde, noche)").toLowerCase();
let clima = prompt("¿Cómo está el clima? (soleado, lluvioso, nublado)").toLowerCase();
let tieneParaguas = prompt("¿Tienes paraguas? (sí/no)").toLowerCase();

let paraguas = tieneParaguas === "sí" || tieneParaguas === "si";


if (clima === "soleado") {
  console.log("Recomendación: Puedes caminar sin problema.");
} else if (clima === "nublado") {
  if (hora === "mañana" || hora === "tarde") {
    console.log("Recomendación: Camina, pero lleva precauciones.");
  } else {
    console.log("Recomendación: Mejor toma el bus por seguridad.");
  }
} else if (clima === "lluvioso") {
  if (paraguas) {
    console.log("Recomendación: Puedes caminar, llevas paraguas.");
  } else {
    console.log("Recomendación: Espera a que pase la lluvia o toma el bus.");
  }
} else {
  console.log("Datos no válidos. Por favor revisa lo que escribiste.");
}
