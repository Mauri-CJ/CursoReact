import { useEffect,useState } from "react"

//Con esto lo que podemos hacer en este caso es ejecutar codigo cuando el componente se crea
//Y cuando se destruye o se demsonta

export const Message = () => {
    const [cords, setCords] = useState({x:0,y:0})


    //Si no limpiamos el listener,por cada vez que se construya el componente message, se esta creando uno nuevo y se van acumulando
    //Esto nos produce una fuga de memoria, al acumularse, si se acumulan 100, por cada movimiento del mouse se ejecutan 100
    useEffect(() => {
      //La definimos antes para poder pasarla al remove event linstener en la cleanUp  
      const onMouseMove = ({x,y}) => {
        //const coords = {x,y}
        setCords({x,y})
      }

      // = ('mousemove', (event) => onMouseMove(event)) aunque no podemos pasarla asi porque no funciona, porque no estamos creando el espacio en memoria de esa funcion
      window.addEventListener('mousemove',onMouseMove) 
      //console.log("Message Mounted")
    
      //Si yo no remuevo el listener, va a intentar actualizar el estado de un componente que no existe, que es este
      //Que se remueve, esto es un error en react
      return () => { 
        window.removeEventListener('mousemove',onMouseMove)
        //console.log("Message unmounted")
      }
    }, [])
    

    return (
        <>
        <h3>Usuario ya existe</h3>
        {JSON.stringify(cords)}
        </>
    )
}