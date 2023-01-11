import React from 'react'; //React
import ReactDOM from 'react-dom/client' //Herramienta para renderizado
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';

import {HelloWorld} from './HelloWorld'


import './styles.css' //Importamos estilos globales

//Renderizamos el componente que creamos en el div que indentificamos con id root en el index.html
//Forma de renderizar el componente en el DOM
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<HelloWorld/> Renderizamos el componente HelloWorld*/}
        {/* <FirstApp title = "Hola!" number = {123}/> Le pasamos propiedades al componente que puede utilizar dentro*/}
        <CounterApp value={0}/>
    </React.StrictMode>
) 

