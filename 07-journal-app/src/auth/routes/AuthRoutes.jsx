import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../pages'

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path = "login" element= {<LoginPage/>}/>
        <Route path = "register" element= {<RegisterPage/>}/>

        {/*Si se entra a la ruta auth pero no estamos ni en login ni en registro, navegamos el usuario hacia login*/}
        <Route path = "/*" element={<Navigate to="/auth/login"/> }/>
    </Routes>
  )
}
