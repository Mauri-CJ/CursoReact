const persona = {
    nombre:'',
    edad: '',
    clave: '',
}

//Extrae las propiedades del objeto persona, se puede cambiar el nombre
//{nombre:nombre2} extraigo nombre de persona
const {nombre,clave} = persona;

//La destructuracion tambien puede hacerse directamente al recibir un argumento en una funcion
const retornarNombrePersona = ({nombre, dni = 52}) => { //Damos un valor por defecto a dni por si el objeto no posee esa propiedad
    return `${nombre} : ${dni}`
}

console.log(retornarNombrePersona(persona))

//Destructurando el retorno de una funcion que a su vez destructura un objeto
const _useContextF = ({nombre,edad,clave})=>{
    return {nombreClave:clave,anios:edad}
}

const {nombreClave,anios} = _useContextF(persona)

console.log(nombreClave,anios)

//Desctructurar objetos anidados
const personaDetalle = {
    nombre:'',
    edad: '',
    clave: '',
    direccion:{
        calle:'8 Bis',
        numero:257,
    }
}

const {nombre:nombrePersona,edad:edadPersona,direccion:{calle,numero}} = personaDetalle
console.log(
    nombrePersona,
    edadPersona,
    calle,
    numero
)