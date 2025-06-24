console.log("Bienvenido al banco");

let saldo = parseInt(prompt("Ingrese un monto"));

if (saldo <= 10000){
    console.log("Saldo insuficiente.");
    console.warn("Saldo insuficiente.");
    alert("Saldo insuficiente.");
} else if (saldo >= 10001 && saldo <= 1000000){
    console.log("Saldo moderado.");
    console.warn("Saldo moderado.");
    alert("Saldo moderado.");
} else {
    console.log("Cliente preferencial.");
    console.warn("Cliente preferencial.");
    alert("Cliente preferencial.");
}