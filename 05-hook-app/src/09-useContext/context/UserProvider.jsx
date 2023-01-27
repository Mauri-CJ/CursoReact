import { useState } from "react"
import { UserContext } from "./UserContext"

//Creo componenete proveedor de contexto, el cual va a recibir childrens, que son los componentes que lleva dentro a los cuales les va a proveer el contexto
export const UserProvider = ({children}) => { 
  const [user, setUser] = useState()
  return (
    <UserContext.Provider value={{user,setUser}}> {/* Valores que voy a proveer a todoso los que consuman el contexto */}
        {children}
    </UserContext.Provider>
  )
}
