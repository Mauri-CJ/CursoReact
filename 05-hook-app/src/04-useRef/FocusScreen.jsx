import { useRef } from "react"
export const FocusScreen = () => {
    const onClick = () => {
        //.current para hacer referencia al valor que tiene almacenado el input ref
        inputRef.current.select()
    }

    //Con este inputRef, mantenemos la referencia al input del formulario
    const inputRef = useRef()
  
    return (
    <>
     <h1>Focus Screen</h1>
     <hr />

     <input
        ref = {inputRef} //Aca le asociamos la referencia al input
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
        name="" 
        id="" 
     />
     <button 
        className="btn btn-primary mt-2"
        onClick={ onClick}
     >
        Set Focus
    </button>
    </>
  )
}

