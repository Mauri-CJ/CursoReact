import { useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username:'CSHA',
        email:'csha@gmail.com'
    })

    const {username,email} = formState

    //Destructuro el target del evento, osea del evento me quedo con la propiedad target
    const onInputChange = ({target}) => {
        const {name,value} = target
        setFormState(
        {...formState, 
            [name] : value, 
            //Uso propiedades computadas para hacer referencia la propiedad name de el input que esta siendo modificada
        })}

    //useEffect (()=> console.log("Primer renderizado"),[])
    
    //Le pasamos al useEfect el formState, para que cada vez que cambie se dispare el useEffect
    //useEffect (()=> console.log("Cambio el formState"),[formState])

    //useEffect (()=> console.log("Cambio el email"),[email])
    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                autoComplete="off"
                value = {username}
                onChange = {onInputChange}
            />
            <input 
                type="email"
                className="form-control mt-2"
                placeholder="mauricocella@gmail.com"
                name="email"
                autoComplete="off"
                value = {email}
                onChange = {onInputChange}
            />
            {
                (username === 'CSHA') && <Message/>
            }
        </>
    )
}
