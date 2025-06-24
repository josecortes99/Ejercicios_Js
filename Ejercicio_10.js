let dia = prompt("¿Qué día de la semana es?").toLowerCase();

if (dia == "lunes") {
    console.log("Menú del lunes: Pollo asado con arroz.");
    alert("Menú del lunes: Pollo asado con arroz.");
} else if (dia == "martes") {
    console.log("Menú del martes: Pasta con carne.");
    alert("Menú del martes: Pasta con carne.");
}
else if (dia == "miercoles") {
    console.log("Menú del miércoles: Sopa de lentejas.");
    alert("Menú del miércoles: Sopa de lentejas.");
}
else if (dia == "jueves") {
    console.log("Menú del jueves: Bandeja paisa.");
    alert("Menú del jueves: Bandeja paisa.");
}
else if (dia == "viernes") {
    console.log("Menú del viernes: Pescado frito con ensalada.");
    alert("Menú del viernes: Pescado frito con ensalada.");
}
else if (dia == "sabado") {
    console.log("Menú del sábado: Hamburguesa con papas.");
    alert("Menú del sábado: Hamburguesa con papas.");
}
else if (dia == "domingo") {
    console.log("Menú del domingo: Tamales y chocolate.");
    alert("Menú del domingo: Tamales y chocolate.");
} else {
    console.log("Día no válido. Por favor ingresa un día de la semana.");
    console.warn("Día no válido. Por favor ingresa un día de la semana.");
    alert("Día no válido. Por favor ingresa un día de la semana.");

}
