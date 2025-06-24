let total = 0;
let opcion;

const productos = {
  "1": { nombre: "Pan", precio: 2000 },
  "2": { nombre: "Leche", precio: 3500 },
  "3": { nombre: "Chocolate", precio: 4500 }
};

do {
  opcion = prompt(
    "¿Qué deseas hacer?\n1. Agregar producto\n2. Finalizar compra"
  );

  if (opcion === "1") {
    let productoElegido = prompt(
      "Elige un producto:\n1. Pan ($2000)\n2. Leche ($3500)\n3. Chocolate ($4500)"
    );

    if (productos[productoElegido]) {
      total += productos[productoElegido].precio;
      console.log(`${productos[productoElegido].nombre} agregado. Total: $${total}`);
    } else {
      console.log("Producto no válido.");
    }

  } else if (opcion !== "2") {
    console.log("Opción no válida.");
  }

} while (opcion !== "2");

console.log(`Compra finalizada. Total a pagar: $${total}`);
