const prompt = require("prompt-sync")({ sigint: true })

let i = prompt("Ingrese un valor: ");
console.log(i);
i = parseInt(i);
console.log(Number.isInteger(i));
console.log(typeof i);

if (i < 10) {
    console.log("El numero es menor a 10")
}

else {
    console.log("el numero es mayor o igual a 10")
}
if (Number.isInteger(i)) {
    if (i < 5) {
        console.log("REPROBADO");
    }
    else if (i < 10) {
        console.log("BUENO");
    }
    else if (i <= 15) {
        console.log("BIEN");
    }
    else {
        console.log("EXCELENTE")
    }
}
else {
    console.log("Ingrese un numero")
}

let dia =prompt("Ingrese un numero de 1 - 7: ");
switch(dia){
    case "1": 
        console.log("Lunes");
    break;
    case "2": 
        console.log("Martes");
    break;
    case "3": 
        console.log("Miercoles");
    break;
    case "4": 
        console.log("Jueves");
    break;
    case "5": 
        console.log("Viernes");
    break;
    case "6": 
        console.log("Sabado");
    break;
    case "7": 
        console.log("Domingo");
    break;
    default:
        console.log("fuera de rango");
    break;
}

let r=prompt("Repetir hasta: ");
let a =1
while (a<r){
    console.log("VALOR: ", a)
    a++;
}

for (let i=0; i < r; i++){
    console.log(" FOR: ", i)
} 

let inicio=prompt("repetir desde: ");
let final = prompt("repetir hasta: ")
for( let i=inicio; i<= final; i++){
    console.log("RP--", i)
}