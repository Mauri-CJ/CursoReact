//import { Fragment } from "react"
//Se utiliza cuando queremos crear un componente con mas de un elemento

//Siempre tenemos que retoranr un nodo padre y adentro ahi si la cantidad de elementos querramos
//No podemos retornar mas de un elemento si no estan agrupados en un nodo padre
const newMenssage ={ //Esto no queda en scope global, esta encapsulado junto con el componente
    message : 'Hola',
    title : 'Mundo'
}

//Sirve para definirle el tipo a las propiedades
import PropTypes from  "prop-types" //yarn add prop-types


//Es recomendable poner las funciones que no necesitan del comportamiento interno del componene afuera del componente a renderizar .
//Asi cuando react tenga que re-renderizar un componente, no cargue dos veces las mismas funciones en memoria y demas 

const returnMenssage = () => newMenssage

export const FirstApp = ({title,number,defaultProp}) =>{
    {/**if (!title) {throw new Error ('El titulo no existe')*/}
    return (
        <> {/*  Es lo mismo que un fragmento*/}
        {/**<h1>{JSON.stringify(newMenssage)}</h1>**/}
        {/**<h1>{JSON.stringify(returnMenssage())}</h1>*/} {/** Funciones asincronas o promesas no se pueden renderizar*/}
        <h1>{title}</h1>
        <h2>{defaultProp}</h2>
        <p>{number}</p>
    </>
    )
}

//Definimos los tipos de las propiedades y si son requeridas,etc
//Usualemnte la configuracion de componentes usualemente se ponen al final 
FirstApp.propTypes = {
    title : PropTypes.string.isRequired,
    number :PropTypes.number
}

//Los defaultProps se cargan antes que los PropTypes
FirstApp.defaultProps = {
    title : 'No hay titulo',
    number: 'Noy hay numeros',
    defaultProp : 'Propiedad que no se pasa desde el padre'
}