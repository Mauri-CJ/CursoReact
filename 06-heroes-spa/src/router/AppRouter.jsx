import React from 'react'
import { Route, Routes } from 'react-router-dom'


import {HeroesRoutes } from '../heroes'
import { LoginPage } from '../auth'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

{/* Rutas de toda la aplicacion */}
export const AppRouter = () => {
  return (
    <>
        {/*Establezco las rutas de navegacion de la aplicacion */}
        <Routes>
          {/*Encierro las rutas publicas de mi aplicacion (LoginPage en este caso) en el componente PublicRouter */}
          {/* En caso de que el usuario no este loggeado, el componente PublicRoute me retorna los hijos que tiene dentro(LoginPage en este caso) */}
          {/* Caso contrario, si el usuario no esta loggeado, me navega hacia marvel */}
          <Route path ='/login' element={ //Cuando se navega a la ruta login, se renderiza el componente PublicRoute
            <PublicRoute>
              <LoginPage/>
            </PublicRoute>
          }/>

         
          <Route path ='/*' element={ //Cuando se navega a la ruta login, se renderiza el componente PrivateRoute
            /*Encierro las rutas de heroes en un componente PrivateRoute, que recibe como hijos los componentes que tenga dentro (HeroesRoute en este caso)*/
            //En caso de que el usuario este loggeado me retorna los hijos que le pase al componente, en caso de que no este loggeado
            //El compoente no me retorna los hijos, sino que retorna una navegacion hacia el login, entonces al renderizarse el componente PrivateRoute, me navega hacia el login
            <PrivateRoute>
              <HeroesRoutes/>
            </PrivateRoute>
          }/>

          
        
        </Routes>
    </>
  )
}
