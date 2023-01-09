const persona = {
    nombre:' ',
    apellido:'',
    edad:'',
    direccion: {
        ciudad:'',
        zip: '',
        lat:'',
        lng:'',
    }
}

//Copia de objetos, sirve par arreglos.
const persona2 = {...persona}
console.table(persona2)
console.log(persona2)