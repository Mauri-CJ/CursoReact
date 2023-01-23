//EL useLayoutEffect se usa mayormente para tener las mediciones del tamaño del componente
import { useLayoutEffect,useRef,useState} from "react"
export const Quote = ({quote,author}) => {
  const pRef = useRef() //Referenciamos al parrafo
  const [boxSize, setboxSize] = useState({widht:0,height:0})

  //Lo que hace es una vez que se renderiza por completo el componente, obtiene las medidas del parrafo y se las asigna al estado para mostrarlas en pantalla
  useLayoutEffect(() => {
    //Con getBoundingClientRect() obtenemos toda la informacion del tamanio, posicion del parrafo
    const {height,width} = pRef.current.getBoundingClientRect()

    setboxSize({height,width}) //Le seteamos las nuevas medidas del parrafo al estado para mostrarlas en pantalla
  }, [quote])//Aunque no es necesario [] basta con eso, porque cada vez que traemos uno, el componente se destruye y vuelve a crearse

  return (
    <>
        <blockquote className="blockquote text-end" style={{display:'flex'}}>
            <p ref={pRef} className="mb-1">{quote}</p> {/* Referenciamos al parrafo*/}
            <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
      <br />
    </>
  )
}


