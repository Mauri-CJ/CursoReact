import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages'


export const HeroesRoutes = () => {
  //Componente que renderiza navbar y tiene su propias rutas
  return (
    <>
        <Navbar/>
        <div className='container'>
            <Routes>
                <Route path='marvel' element= {<MarvelPage/>}/>
                <Route path='dc' element= {<DcPage/>}/>
                <Route path='search' element= {<SearchPage/>}/>
                {/*Le mandamos un argumento a esa ruta y cuando se lo mandemos, ese argumento que le mandamos queda en el conetexto de la sesion */}
                <Route path='hero/:heroId' element= {<HeroPage/>}/>

                <Route path='/' element= {<Navigate to="/marvel"/>}/>
            </Routes>
        </div>
    </>
  )
}
