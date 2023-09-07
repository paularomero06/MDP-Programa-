const inputItem = document.getElementById("inputItem");
const btnItem = document.querySelector("#btnItem");
const listItems = document.querySelector("#listItems");

inputItem.focus();
btnItem.addEventListener("click", function () {
    //alert(inputItem.value);   
    const trElement = document.createElement("tr");
    const tdElementOne = document.createElement("td");
    const tdElementTwo = document.createElement("td");

    const trLength = document.querySelectorAll("tbody tr").length;
    trElement.id = "item_" + trLength;

    console.log(trLength);

    tdElementOne.textContent = inputItem.value;

    /**how to add a button w/ innerHtml. the data id and trLength +item_+numberItem lets you delete the whole row */
    tdElementTwo.innerHTML = '<button data-id="' + trLength + '" id="deleteItem" class="btn btn-danger">Eliminar</button>';



    trElement.appendChild(tdElementOne);
    trElement.appendChild(tdElementTwo);
    listItems.prepend(trElement);

    const btnEliminar = document.querySelector("#deleteItem");

    btnEliminar.addEventListener("click", function () {
        let numberItem = btnEliminar.getAttribute("data-id");
        console.log(btnEliminar.getAttribute("data-id"));
        const trEliminar = document.querySelector("#item_" + numberItem);
        console.log(trEliminar);
        trEliminar.remove();

    })

    inputItem.value = '';
    inputItem.focus();

})

