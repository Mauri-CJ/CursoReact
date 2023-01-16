import { useState } from "react"
import { AddCategory,GifGrid} from "./components/"

const GifExpertApp = () => {
    const [categorias, setCategorias] = useState([])
    
    const onAddCategoria = (newCategory) => {
        if(categorias.includes(newCategory))return
        setCategorias([ newCategory,...categorias])
        //setCategorias(cat => [...cat, 'a' ])
    }
  return (
    <>
      {/* Titulo*/}
      <h1>Gif Expert App</h1>
    
      {/* Input */}
      {/* Esta no es la forma recomendada para se agreguen valores a la categoria, ya que estamos enviando la funcion de agregacion al hijo */}
      {/* <AddCategory  setCategorias = {setCategorias}/>  Mandamos una funcion al componente hijo*/}
      {/* La mejor forma de hacerlo es de la siguiente manera*/}
      <AddCategory onNewCategoria = {onAddCategoria}/>
      
      {/*<button onClick={(event) => onAddCategoria(event)}>Agregar</button>*/} {/* = onClick = {onAddCategoria}*/} 



      {/* Listado de Gif*/}
      {categorias.map((categoria)=> (<GifGrid 
                                        key={categoria}
                                        categoria = {categoria}
                                      />)
        )
      }
    </>
  )
}

export default GifExpertApp
