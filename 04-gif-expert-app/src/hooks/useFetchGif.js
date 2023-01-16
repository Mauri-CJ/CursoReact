import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

  
  //Uno hook no es mas que una funcion que retorna valores
  export const useFetchGifs = (categoria) => {

     const [images, setImages] = useState([])
     const [isLoading,setIsLoading] = useState(true)
     console.log(isLoading)
     
     const getImages = async () => {
         const newImages = await getGifs(categoria)
         setImages(newImages)
         setIsLoading(false)
     }
     //Hook que ejecuta procesos cuando algo sucede. En este caso el hook ejecuta la funcion getGifs (primer argumento)
     // Y como tiene la lista de condiciones vacia [] (segundo argumento) signfica que ejecute esa accion solo cuando se crea el componente
     useEffect(()=>{
         //getGifs(categoria)
         getImages()
     },[])

    return ({
        images:images, // = images
        isLoading:isLoading
        })
  }
  