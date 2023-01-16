import { useState } from "react"
const CounterApp = () => {
  //El useState recibe un objetos y destructuramos las propiedades para tenerlas por separadas
  const [state, setCounter] = useState({
    counter1:10,
    counter2:20,
    counter3:30,
  })

  //Destructuramos las propiedades del state para tenerlas separadas
  const {counter1,counter2,counter3} = state

  return (
    <>
     <h1>Counter 1: {counter1}</h1>
     <h1>Counter 2: {counter2}</h1>
     <h1>Counter 3: {counter3}</h1>
     <hr />
     <button onClick={() => setCounter(
        { //De esta forma, destructuramos el diccionario para mantener las propiedades anteriores
          //Y solo modificamos las que necesitamos
        ...state,
        counter1:counter1+1}
        )}>+1</button> 
    </>
  )
}

export default CounterApp