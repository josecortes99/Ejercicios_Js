let opcion;

do {
  opcion = prompt(
    "MENÚ\n1. Ver perfil\n2. Editar perfil\n3. Cerrar sesión\n4. Salir\n\nElige una opción (1-4):"
  );

  switch (opcion) {
    case "1":
      console.log("Mostrando tu perfil...");
      break;
    case "2":
      console.log("Puedes editar tu perfil ahora.");
      break;
    case "3":
      console.log("Has cerrado sesión.");
      break;
    case "4":
      console.log("Saliendo del sistema. ¡Hasta pronto!");
      break;
    default:
      console.log("Opción no válida. Intenta nuevamente.");
  }

} while (opcion !== "4");
