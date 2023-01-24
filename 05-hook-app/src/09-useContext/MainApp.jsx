import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AboutPage } from './AboutPage'
import { UserProvider } from './context/UserProvider'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { NavBar } from './NavBar'
export const MainApp = () => {
  return (
    <UserProvider>
        {/* <h1>MainApp</h1> */}
        <NavBar/>
        <hr />
        <Routes>
            <Route path='/' element = {<HomePage/>}/>
            <Route path='/login' element = {<LoginPage/>}/>
            <Route path='/about' element = {<AboutPage/>}/>

            {/*Cuando se ingresa una ruta que no existe, lo mandamos a login page, lo lo mandamos al about, son dos formas de redireccionar
              Cuando la ruta ingresada no existe 
            */}
            <Route path='/*' element={<Navigate to="/about"/>}/>{/*Nos navega hacia la ruta indicada */}
            {/*<Route path="/*" element={<LoginPage/>}/>*/} {/*Nos muestra  cierto elemento pero nos deja en la ruta que nos ingresa el usuario */}
        </Routes>
    </UserProvider>
  )
}
