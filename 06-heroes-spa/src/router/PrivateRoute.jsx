import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth/context/AuthContext"

//Declaracion para manejar las rutas privadas de nuestra app

//Componente, que retorna los componentes hijos que recibe en caso de que el usuario no este loggeado
//Caso contrario, retorna una navegacion hacia marvel
export const PrivateRoute = ({children}) => {
    const {logged} = useContext(AuthContext)
    const {pathname,search} = useLocation()
    
    const lastPath = pathname + search 
    localStorage.setItem('lastPath',lastPath);
    
            
    return (logged)
    ? children //Si tenemos un usuario autenticado, nos retorna los hijos que recibe el componente de orden superior
    : <Navigate to = "/login"/> //Sino, lo navega hacia el login
}
