const ejemplo =() =>{
}

ejemplo();

const persona = {
    firstName: "JUAN",
    lastName: "PEDRO",
    birthday: 20,
    status:true,
    fullName:function(){
        return `${this.firstName} ${this.lastName}`;
    }
};
persona.address="MDP"; 
console.log(persona);
console.log(persona.lastName);
console.log(persona["firstName"]);
console.log(persona.fullName())

/** desestructuracion de objeto */
const {status,birthday}=persona
console.log(status);
console.log(birthday);

console.log(Object.keys(persona));
console.log(Object.values(persona));
console.log(Object.entries(persona));
console.log(persona?.ejemplo);

/**Arrays[] conjunto o coleccion de elementos. Comienzan siempre en posicion 0. Todo elemento tiene posicion dentro del array. 2 maneras de declarar:
 * new Array o [] */
const arrayEjemplo = new Array ('hola', 2, 3,4, true);
console.log(arrayEjemplo.length);
const arrayDos=[3, "hola","buenas",3,4,5];
console.log(arrayDos.length);
console.log(arrayDos[2]);

/**Operaciones y func. de Arrays */
arrayDos.push(4,5,6,"hola");//al final del vector.
console.log(arrayDos.length);
arrayDos.unshift("*****");//al ppio del vector.
console.log(arrayDos);
console.log(arrayDos.length);


arrayDos.pop();//elimina el ultimo elemento del vector
console.log(arrayDos.length);
console.log(arrayDos);

arrayDos.shift();//elimina el primer elemento del vector.
console.log(arrayDos);
console.log(arrayDos.length);

arrayDos.splice(2,1); //Splice(pos,cant) se indica la posicion y cant. de elementos a eliminar. 
console.log(arrayDos);
arrayDos.splice(1,0,'hey there'); // Add elements: posicion, 0 indica no eliminar, y luego elemento a agregar.
console.log(arrayDos);
console.log(arrayDos.length);