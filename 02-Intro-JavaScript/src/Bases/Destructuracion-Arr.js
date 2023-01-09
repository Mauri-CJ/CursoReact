const numeros = ["Uno","Dos","Tres","Cuatro"]
const [primerPos] = numeros
console.log(primerPos)

const [,segundaPos] = numeros
console.log(segundaPos)

const [,,tercerPos] = numeros
console.log(tercerPos)

const retornaArreglo = () => {
    return ["ABC",123];
}

const [letras,nums] = retornaArreglo()
console.log(letras,nums)

//Ejercicio
const _useState = (valor) => {
    return [valor, () => {console.log("Hola!")}]
}

const [nombre,setNombre]  = _useState('Mauricio')
setNombre() 
