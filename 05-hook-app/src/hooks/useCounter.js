import { useState } from "react"
//De esta manera tenemos separada la logica de negocio aca del componente, y hace que el componente se vea mas sencillo y sea mas legible
//Le damos valor 10 por defecto por si la persona no nos manda el initialValue
export const useCounter = (initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue)

    const increment = (value = 1) => setCounter(counter+value)

    const reset= () => setCounter(initialValue)

    const decrement= (value = 1) => {
        if (counter-value < 0)return;
        setCounter(counter-value)
    }

  return (
    {
        counter,
        increment,
        decrement,
        reset
    }
  )
}

