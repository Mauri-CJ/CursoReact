import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGif"


export const GifGrid = ({categoria}) => {

    // const [images, setImages] = useState([])


    // const getImages = async () => {
    //     const newImages = await getGifs(categoria)
    //     setImages(newImages)
    // } 


    // //Hook que ejecuta procesos cuando algo sucede. En este caso el hook ejecuta la funcion getGifs (primer argumento)
    // // Y como tiene la lista de condiciones vacia [] (segundo argumento) signfica que ejecute esa accion solo cuando se crea el componente
    // useEffect(()=>{
    //     //getGifs(categoria)
    //     getImages()
    // },[])

    //Usando custom hook
    const {images,isLoading} = useFetchGifs(categoria)
    console.log(isLoading)

    return (
    <>
        <h3>{categoria}</h3>
        { isLoading && <h2> Cargando...</h2>}

        <div className="card-grid">
            {images.map((image) =>(
                <GifItem  key ={image.id}
                /* Forma de mandar propiedades, expandimos el image y se mandan automaticamente los atributos que tiene ese image como props */
                {...image} 
            />
            ))}
        </div>
    </>
  )
}
