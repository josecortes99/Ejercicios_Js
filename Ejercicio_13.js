
const usuarioValido = "usuario123";
const contrasenaValida = "clave123";

const adminValido = "admin";
const contrasenaAdmin = "admin123";

let intentosFallidos = 0;
let accesoConcedido = false;

while (intentosFallidos < 3 && !accesoConcedido) {
  let usuario = prompt("Ingresa tu usuario:");
  let contrasena = prompt("Ingresa tu contraseña:");


  if (usuario === adminValido && contrasena === contrasenaAdmin) {
    console.log("Acceso permitido como administrador.");
    accesoConcedido = true;
    break;
  }


  if (usuario === adminValido && contrasena !== contrasenaAdmin) {
    if (intentosFallidos === 0) {
      console.log("Contraseña incorrecta. Tienes una oportunidad extra por ser administrador.");
      intentosFallidos++;
      continue;
    } else {
      console.log("Acceso bloqueado para administrador por múltiples errores.");
      break;
    }
  }

  if (usuario === usuarioValido && contrasena === contrasenaValida) {
    console.log("Acceso permitido.");
    accesoConcedido = true;
    break;
  } else {
    intentosFallidos++;
    console.log(`Usuario o contraseña incorrectos. Intento ${intentosFallidos} de 3.`);
  }
}

if (!accesoConcedido) {
  console.log("Acceso bloqueado por demasiados intentos fallidos.");
}
