import { LoadingCuote } from "../03-examples/LoadingCuote"
import { Quote } from "../03-examples/Quote"
import { useCounter,useFetch } from "../hooks"



export const Layout = () => {
  const {counter,increment} = useCounter(1)

  const {data,isLoading,hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)

  const {quote,author} = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {
        (isLoading)
        ?( <LoadingCuote/>)
        :(<Quote quote= {quote} author = {author}/>)
      }
  
      <button onClick={() => increment()}
        className="btn btn-primary" disabled = {isLoading}>
        Next
      </button>

   

    </>
  )
}