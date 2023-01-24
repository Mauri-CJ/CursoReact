import React from 'react'
import { Link,NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
    <div className="container-fluid">
        <Link className="navbar-brand" to="/">useContext</Link>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <NavLink
                    className={({isActive}) => {return `nav-link ${isActive? 'active' : ''} ` }}
                    to = "/"
                >   
                    Home
                </NavLink>

                <NavLink
                    className={({isActive}) => {return `nav-link ${isActive? 'active' : ''} ` }}
                    to = "/about"
                >   
                    About
                </NavLink>

                <NavLink
                    className={({isActive}) => {return `nav-link ${isActive? 'active' : ''} ` }}
                    to = "/login"
                >   
                    Login
                </NavLink>
                


            </ul>
        </div>
    </div>
    </nav>
  )
}





<>
{/* Al usar link, a diferencia de las etiquetas a, no se hace se hace un refresh la aplicacion, simplemente se carga el componente */}
<Link to="/">Home</Link>  {/* Los links una vez se crean los componentes, son etiquetas a, entonces para darle estilos, se las damos a las a */}
<Link to="/about">About</Link> 
<Link to="/login">Login</Link> 
</>