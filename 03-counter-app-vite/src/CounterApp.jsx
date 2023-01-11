import  {useState} from 'react'
import PropTypes from 'prop-types' 


//RAFC
export const CounterApp = ({value}) => {
    console.log("Render")
    //Usando hook, le pasamos un valor, y destructuramos una variable con ese valor y una funcion para modificar ese valor
    const [counter,setCounter] = useState( value)

    //El hook cambia el estado del componente
    const handleAdd = (event) => setCounter(counter + 1)
    //Set counter tambien puede recibir una funcion que retorna el nuevo valor del counter
    //setCounter((c)=> c + 1) la funcion recibe cque es el counter en su valor actual

    const handleSubtract = (event) => setCounter(counter-1)
    const handleReset = (event) => setCounter(value)
    return <>
        <h1>Welcome</h1>
        <h3>{counter}</h3>

        
        <button onClick = {handleSubtract}>
            -1
        </button>

        <button onClick = {handleReset}>
            Reset
        </button>
        <button onClick={handleAdd}> {/** onClick={(event) => handelAdd(event)}  * Cuando tenemos una funcion que solo recibe parametros y lo pasa a otra funcion, podemos hacerlo asi*/}
            +1
        </button >
        </>


    
}

CounterApp.propTypes = {
    value : PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value : 0
}