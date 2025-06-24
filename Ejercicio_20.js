let sumaNotas = 0;
let estudiantesEnRiesgo = 0;
let mayorNota = 0;
let menorNota = 5; 

for (let i = 1; i <= 5; i++) {
  let nota = parseFloat(prompt(`Ingresa la nota del estudiante ${i} (0 a 5):`));

  if (isNaN(nota) || nota < 0 || nota > 5) {
    console.log("Nota no válida. Intenta nuevamente.");
    i--; 
    continue;
  }

  
  sumaNotas += nota;

  
  if (nota < 3) {
    console.log(`Estudiante ${i} está en riesgo (nota: ${nota}).`);
    estudiantesEnRiesgo++;
  } else {
    console.log(`✅ Estudiante ${i} aprobado (nota: ${nota}).`);
  }


  if (nota > mayorNota) mayorNota = nota;
  if (nota < menorNota) menorNota = nota;
}


let promedio = sumaNotas / 5;

console.log("\nRESULTADOS FINALES:");
console.log(`Promedio general: ${promedio.toFixed(2)}`);
console.log(`Estudiantes en riesgo: ${estudiantesEnRiesgo}`);
console.log(`Mayor nota: ${mayorNota}`);
console.log(`Menor nota: ${menorNota}`);
