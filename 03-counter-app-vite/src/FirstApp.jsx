//import { Fragment } from "react"
//Se utiliza cuando queremos crear un componente con mas de un elemento

//Siempre tenemos que retoranr un nodo padre y adentro ahi si la cantidad de elementos querramos
//No podemos retornar mas de un elemento si no estan agrupados en un nodo padre
export const FirstApp = () =>{
    return (
    <> {/*  Es lo mismo que un fragmento*/}
        <h1>FirstApp</h1>
        <p>Subtitulo</p>
    </>
    )
}