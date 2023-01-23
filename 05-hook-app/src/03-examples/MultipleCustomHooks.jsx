import { useCounter,useFetch } from "../hooks"
import { LoadingCuote } from "./LoadingCuote"
import { Quote } from "./Quote"


export const MultipleCustomHooks = () => {
  const {counter,increment} = useCounter(1)
  const {data,isLoading,hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
  console.log(isLoading)
  //!!data && data[0] Esto se hace cuando me retornan un arreglo, si es un objeto no
  //Si la data tiene valor (!!data) entonces destructurame (&& data) name y file de data si !!data es true, entonces nos retorna data y destructuramos, si da falso nos destructura con valor undefined
  //si data es undefined, con la doble negacion pasa a falso, 
  //esto es porque no podemos (const {a,b} = undefined) nos da error, entonces si la data es undefined la pasamos a false
  //Que si se podria (const {a,b} = false) se puede y no da error, aunque a y b quedan con valor undefined
  
  //Como la api me retorna un arreglo de objetos, se hace de la siguiente manera para prevenir errores
  const {quote,author} = !!data && data[0]
  return(
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {
        (isLoading)
        ?( <LoadingCuote/>)
        :(<Quote quote= {quote} author = {author}/>)
      }
  
      <button onClick={() => increment() /*Llamamos asi la funcion para no pasarle el evento, sino se nos rompe*/} 
        className="btn btn-primary" disabled = {isLoading}>
        Next
      </button>
    </>
  )
}

