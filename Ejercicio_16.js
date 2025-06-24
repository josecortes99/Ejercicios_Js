let calificacion;

do {
  calificacion = parseInt(prompt("¿Cómo calificarías nuestro servicio? (1 a 5)"));

  if (calificacion !== 5) {
    console.log("Gracias por tu opinión. Seguiremos mejorando.");
  }

} while (calificacion !== 5);

console.log("¡Gracias por la calificación perfecta!");
