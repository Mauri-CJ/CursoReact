import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";
//Proveedor de contexto
const initialState = {}

//La funcion inicializadora tiene que retornar algo que sea aceptable como valor incial
const init = () => {
    const user = JSON.parse(localStorage.getItem('user'))
     //Si el getItem retorna null, significa que no hay usuario
    
    return {
        logged: !!user, //Si el user es undefined, guarda false, si user tiene valor, guarda true 
        user
    }    
}

export const AuthProvider = ({children}) => {
    const [authState, dispatch] = useReducer(authReducer,initialState,init) //Uso la funcion inicializadora para establecer el intial state

    const login = async( name = '' ) => {
        const user = {id:'ABC',name:name}

        const action={
            type : types.login,
            payload : user,
        }
        localStorage.setItem('user',JSON.stringify(user))
        dispatch(action)
    }

    const logout = () =>{
        localStorage.removeItem('user');
        const action =  {type : types.logout}
        dispatch(action)
    } 


    return (
    <AuthContext.Provider value={{
        //Propertys
        ...authState, //Tener cuidado con la destructuracion, porque si hay una propiedad que se llame login, nos la pisa el login de abajo
        
        //methods
        login:login,
        logout:logout
    }}>
        {children}
    </AuthContext.Provider>
  )
}
