const divUno = document.getElementById("divUno");
const divDos = document.querySelector("#divDos");
const divTres = document. querySelector("#divTres");

const btnCambiar = document.getElementById("btnCambiar");
const btnVolver = document.querySelector("#btnVolver");

//evento click//
btnCambiar.addEventListener("click", function(){
    divUno.style="background-color:red !important";
    divDos.style="background-color:pink !important; width:100%";
    divTres.style="background-color:green !important; width:100%";
     
})
btnVolver.addEventListener("click", function(){
    divUno.style="";
    divDos.style="";
    divTres.style="";
})