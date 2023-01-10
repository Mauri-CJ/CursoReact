import React from 'react'; //React
import ReactDOM from 'react-dom/client' //Herramienta para renderizado
import { FirstApp } from './FirstApp';

import {HelloWorld} from './HelloWorld'

//Renderizamos el componente que creamos en el div que indentificamos con id root en el index.html
//Forma de renderizar el componente en el DOM
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorld/> {/* Renderizamos el componente HelloWorld*/}
        <FirstApp/>
    </React.StrictMode>
) 

