let usuariosValidos = 0;

for (let i = 1; i <= 5; i++) {
  let nombre = prompt(`Ingresa el nombre del usuario ${i}:`);

  if (nombre.length > 3) {
    console.log(`Usuario "${nombre}" registrado correctamente.`);
    usuariosValidos++;
  } else {
    console.log(`El nombre "${nombre}" es inválido (debe tener más de 3 caracteres).`);
  }
}

console.log(`Total de usuarios válidos registrados: ${usuariosValidos}`);
