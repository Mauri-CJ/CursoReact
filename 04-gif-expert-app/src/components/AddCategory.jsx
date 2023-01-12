import { useState } from "react"

export const AddCategory = ({onNewCategoria}) => {
  const [inputValue, setInputValue] = useState('One Puch')
  const onInputChange =  (event)  => { 
    setInputValue(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault() //Evita que el navegador se recargue cuando enviamos un formulario
    if(inputValue.trim().length <= 1){return}
    //setCategorias((categorias) => [inputValue,...categorias]) //setCategorias recibe una callback que recibe las categorias que ya tiene
    //En vez de recibir set categorias, recibimos otra funcion que ejecuta setCategorias por dentro, y  solo le pasamos a la funcion el valor a agregar
    onNewCategoria(inputValue) //Esta es la mejor forma de hacerlo
    setInputValue('')
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder= "Buscar Gifs" 
          onChange = {(event) => onInputChange(event) /* = onChange = {onInputChange} */}
          />
      </form>

    </>
  )
}
