import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import { useCounter } from '../hooks/useCounter'
import { Small } from './Small'

const heavyStuff = (iterationNumber = 100) =>{
    for (let i = 0; i<iterationNumber; i++){
        console.log("Iterando Proceso")
    }

    return `${iterationNumber}, interaciones realizadas`
}

export const MemoHook = () => {
    const  {counter,increment} = useCounter(4000)
    const [show, setShow] = useState(true)

    //useMemo memoriza lo que sea que la callback que le pasemos retorne, y ese valor memorizado se va a mantener asi a menos que las dependencias que indicamos cambien
    //En este caso retorna la funcion heavyStuff, por lo tanto la memoriza, en caso de no retornar nada, memoriza undefined
    /* esta variable memoriza la funcion heavyStuff */
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]) 
    //Este valor (la funcion) se va a re-procesar y se memoriza cada que las dependencias cambian, en este caso el counter, si pasamos un [] solo lo hace la primera vez
    //Entonces solo se ejecuta nuevamente, cuando el counter modifica

    //La funcion se dispara cada vez que se memoriza, y le indicamos que se memorize cada vez que hay un cambio en el counter, por consecuencia solamente se dispara o se vuelve a ejecutar cuando hay un cambio en el counter porque es en el momento en que se memoriza
    return (
    
    <>
        <h1>Counter: <small> {counter} </small> </h1>
        <hr />
        {/*Si ejecuto el heavyStuff directamente, se ejecuta siempre que el componente se vuelva a renderizar*/}
        <h4>{memorizedValue}</h4> {/* Esto solo va a ser ejecutado cuando el counter cambie, si cambiamos el estado del show, no se va a procesar nuevamente, solo se va a reprocesar y ejecutar cuaando el counter cambie porque asi se lo especificamos en las dependendias*/}
        <button
            className='btn btn-primary'
            onClick={()=> increment()}
        >
            +1
        </button>
        <button className='btn btn-primary' onClick={() => setShow(!show)}>
            Show/Hide {JSON.stringify(show)} {/*Valores booleanos no se pueden renderizar en pantalla*/}
        </button>
    </>
  )
}
