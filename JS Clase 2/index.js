const prompt = require("prompt-sync")({ sigint: true });
/**Actividad 1 : 3 valores: mayor y menor de los 3*/
let numeroOne = prompt("Ingrese el número uno: ");
let numeroTwo = prompt("Ingrese el número dos: ");
let numeroThree = prompt("Ingrese el número tres: ");

let mensaje = "";
if ((numeroOne == numeroTwo) || (numeroTwo == numeroThree) || (numeroOne == numeroThree)) {
    if (numeroOne == numeroTwo) { mensaje += "son iguales: uno-dos "; }
    if (numeroOne == numeroThree) { mensaje += "son iguales: uno-tres "; }
    if (numeroTwo == numeroThree) { mensaje += "son iguales: dos-tres "; }
}
else
if ((numeroOne > numeroTwo) && (numeroTwo > numeroThree)) {
    mensaje = "EL MAYOR ES EL NUMERO UNO " + numeroOne;
}
else if ((numeroTwo > numeroOne) && (numeroTwo > numeroThree)) {
    mensaje = "EL MAYOR ES EL NUMERO DOS " + numeroTwo;
}
else if ((numeroThree > numeroOne) && (numeroThree > numeroTwo)) {
    mensaje = "EL MAYOR ES EL NUMERO TRES " + numeroThree;
}
else {
    mensaje = "LOS NUMEROS SON IGUALES "
}
console.log(mensaje);

/*Actividad 2: tabla de multiplicar**/

let tabla=prompt("INGRESE EL NUMERO DE LA TABLA A MOSTRAR:  ")

for(let i=1; i<=10; i++){
   // let result = tabla + " X "+i+"="+(tabla*i);
   let result=`${tabla} X ${i} = ${i*tabla} `;
    console.log(result);
}

