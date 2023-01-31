import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth/context/AuthContext"


//Componente, que retorna los componentes hijos que recibe en caso de que el usuario no este loggeado
//Caso contrario, retorna una navegacion hacia marvel
export const PublicRoute = ({children}) => {
    const {logged} = useContext(AuthContext)
  
    return (!logged) 
    ?children //Si el usuario no esta loggeado, permite que pueda navegar a las rutas publicas
    :<Navigate to ="/marvel"/> //Si no, lo navega hacia marvel
}
