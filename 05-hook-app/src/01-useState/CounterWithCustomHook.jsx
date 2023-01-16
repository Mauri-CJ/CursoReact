import { useCounter } from "../hooks/useCounter"
const CounterWithCustomHook = () => {
    //La destructuracion siempre depende de lo que nos retorne la funcion, en este caso un objeto por eso el {}
    const {counter,increment,decrement,reset} = useCounter(20)


    return (
        <>
            <h1>Counter with Custom Hook: {counter}</h1>
            <hr /> 

            <button className="btn btn-primary"  onClick={()=>decrement(11) /* onClick = {decrement}  ojo que de esta forma a la hora de pasar un value ej 
                                                                            (11) nos rompe e imprime object object, porque pasa el evento a decrement y asigna el toString del objeto al value*/}> 
                -1
            </button>
            <button className="btn btn-primary"  onClick={()=>reset()}>
                Reset
                </button>
            <button className="btn btn-primary" onClick={()=>increment(20)}>
                +1
                </button>


        </>
    )
}

export default CounterWithCustomHook
