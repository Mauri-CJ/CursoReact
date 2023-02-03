import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes.jsx'

export const AppRouter = () => {
  return (
    <Routes>
        {/* Login y Registro (Cualquier ruta que empiece con auth nos renderiza el componente authroutes que tiene todas las rutas del auth)*/}
        <Route path ="/auth/*" element = {<AuthRoutes/>}/>

        {/*Journal App (Cualquier ruta que no entre por auth, renderiza el componente de JournalRoutes que tiene todas las rutas del Journal)*/}
        <Route/>
        <Route path ="/*" element = {<JournalRoutes/>}/>    
    </Routes>
  )
}
