const usuarioCorrecto = "usuario123";
const contrasenaCorrecta = "clave123";

let intentos = 3;

while (intentos > 0) {
  let usuario = prompt("Ingresa tu nombre de usuario:");
  let contrasena = prompt("Ingresa tu contraseña:");

  if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
    console.log("Bienvenido.");
    break;
  } else {
    intentos--;
    if (intentos > 0) {
      console.log(`Datos incorrectos. Te quedan ${intentos} intento(s).`);
    } else {
      console.log("Cuenta bloqueada por múltiples intentos fallidos.");
    }
  }
}
