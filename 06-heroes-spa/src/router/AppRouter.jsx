import React from 'react'
import { Route, Routes } from 'react-router-dom'


import {HeroesRoutes } from '../heroes'
import { LoginPage } from '../auth'

export const AppRouter = () => {
  return (
    <>
        {/* Rutas de toda la aplicacion */}
        <Routes>
          {/* La ruta login renderiza el componente login */}
          <Route path='login' element= {<LoginPage/>}/>

          {/* Cualquier otra ruta que no sea login 
          renderiza componente, que tiene un navbar y su propio sistema de rutas para los componentes de heroes*/}
          <Route path = '/*' element = {<HeroesRoutes/>}/>
        </Routes>
    </>
  )
}
