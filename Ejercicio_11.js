
let haIniciadoSesion = true;
let tieneReportes = false;
let edad = 20;
let tieneMembresiaPremium = true;


if (
  haIniciadoSesion &&
  !tieneReportes &&
  (edad > 21 || tieneMembresiaPremium)
) {
  console.log("El usuario puede acceder a la oferta.");
} else {
  console.log("El usuario NO puede acceder a la oferta.");
}
