
let contrasenas = ["abc", "segura123", "clave", "12345678", "passw0rd"];
let encontradaValida = false;

for (let i = 0; i < contrasenas.length; i++) {
  let contra = contrasenas[i];

  let tieneOchoCaracteres = contra.length >= 8;
  let contieneNumero = /\d/.test(contra); 

  if (tieneOchoCaracteres && contieneNumero) {
    console.log(`Contraseña "${contra}" es válida.`);
    encontradaValida = true;
    break;
  } else {
    console.log(`Contraseña "${contra}" no es válida. Debe tener al menos 8 caracteres y un número.`);
  }
}

if (!encontradaValida) {
  console.log("No se encontró ninguna contraseña válida.");
}
