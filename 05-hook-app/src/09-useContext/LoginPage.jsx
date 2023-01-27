import React from 'react'

//Hook que nos permite consumir un contexto
import { useContext } from 'react'

//Contexto creado por nosotros
import { UserContext } from './context/UserContext'

export const LoginPage = () => {
  //Del contexto que creamos nosotros, destructuramos lo que necesitamos en este componente
  const {user,setUser} = useContext(UserContext);
  return (
    <>
        <h1>LoginPage</h1>
        <hr />
        <pre>
          {JSON.stringify(user,null,3)}
        </pre>
        <button className='btn btn-primary' onClick={() => setUser({id:123,name:'Mauri',email:'m@gmail.com'})}>
          Establecer Usuario
        </button>
    </>
  )
}
