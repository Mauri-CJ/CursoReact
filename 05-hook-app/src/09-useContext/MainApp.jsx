import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AboutPage } from './AboutPage'
import { UserProvider } from './context/UserProvider'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { NavBar } from './NavBar'
export const MainApp = () => {
  return (
    //Encapsulamos dentro de nuestro contexto, los componentes que queremos que tengan acceso o puedan consumir info de el xd
    <UserProvider>
        <NavBar/>
        <hr />
        {/*Creamos rutas en nuestra app, y  las vinculamos con un componente*/}
        <Routes>
            <Route path='/' element = {<HomePage/>}/> {/*Cuando entramos alpath /, nos renderiza el componenete homepage */}
            <Route path='/login' element = {<LoginPage/>}/>
            <Route path='/about' element = {<AboutPage/>}/>

            {/*Cuando se ingresa una ruta que no existe, lo mandamos a login page, lo lo mandamos al about, son dos formas de redireccionar cuando la ruta ingresada no existe */}
            <Route path='/*' element={<Navigate to="/about"/>}/>{/*Nos navega hacia la ruta indicada */}
            {/*<Route path="/*" element={<LoginPage/>}/>*/} {/*Nos muestra  cierto elemento pero nos deja en la ruta que nos ingresa el usuario */}
        </Routes>
    </UserProvider>
  )
}
