import gsap from "gsap";
import { useRef,useEffect,useState,useLayoutEffect} from "react";
//time line se utiliza para establecer una secuencia de animaciones,y establecer el delay y 
// Y repeticiones de la secuencia de animaciones que establecemos 

const Box = ({ children }) => {
  return <div className="box">{children}</div>;
}

const  Circle = ({ children }) => {
  return <div className="circle">{children}</div>;
}

export const GsapTimeLines = () => {
    const [reversed, setReversed] = useState(false);
    const app = useRef();
    const tl = useRef(); 

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
        //Progress establece en 0 el progreso de la linea de tiempo, si esta en 0 esta al principio, 0.5 a la mitad, 1 completo
        //Si no le pasamos nada obtiene el progreso, en este caso le seteamos el progreso en 0
        //Si la linea linea de tiempo tiene un valor de repeat mayor a 0, el progress es diferente al totalProgress
        //El progress, pasa de 0 a 1, por cada repeticion de la animacion, en cambio el totalProgress pasa de 0 a 1 solo una vez en toda la secuencia de la animacion, tenga o no repeticion
        //(Ej repeat:1) al terminar la primer repeticion, el totalProgress estaria en 0.5
        //(Ej repeat:0) al terminar la primer repeticion, el totalProgress estaria en 1
        //(Ej repeat:3) al terminar la primer repeticion, el totalProgress estaria en 0.25
        tl.current && tl.current.progress(0).kill(); //Kill elimina de manera inmediata la linea de tiempo deteniendo su animacion


        //Establecemos una secuencia de dos animaciones, se repite una vez con u delay de 2 segundos
        tl.current = gsap.timeline({repeat: 1, repeatDelay: 1})
        //establecemos estas dos animaciones dentro de la secuencia
        .to(".box", {
            rotation: 360,
        })
        .to(".circle", {
            rotation:360
        },0);
        }, app);
        return () => ctx.revert();
    }, []);
    
    useEffect(() => {
        // toggle the direction of our timeline
        console.log("toggling reverse to", reversed);
        tl.current.reversed(reversed); //Reversed indica si la animacion se reproduce hacia atras o no   
    }, [reversed]);
    
    return (
        <div className="app" ref={app}>
        <div>
            <button onClick={() => setReversed(!reversed)}>Toggle</button>
        </div>
        <Box>box</Box>
        <Circle>circle</Circle>
        </div>
    );
}

//Podemos establecer un posicionamiento de las animaciones en la linea de tiempo
/*
.to(".box", {
    rotation: 360,
}{PARAMS})
En PARAMS podemos pasarle distintos argumentos:
"algunaEtiqueta" Que se ejecute luego de la animacion ejecutada que tiene cierta etiqueta
"<": Que la animacion se ejecute al inicio de la animacion anterior
">"  Que la animacion se ejecute al final de la animacion anterior
segundos: que se ejecute x segundos despues desde el inicio de la linea de tiempo
Se puede jugar con estos valores:
"+=1" 1 segundo despues del final de la linea de tiempo
"myLabel+=2" 2 segundos despues de la etiqueta myLabel
"<3/<+=3"3 segundos despues de la animacion anterior
"<+=25%" 25% respecto de la animacion anterior
*/