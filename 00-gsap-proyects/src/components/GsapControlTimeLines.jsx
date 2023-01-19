import gsap from "gsap";
import { useRef,useEffect,useState,useLayoutEffect} from "react";


const Box = ({ children }) => {
  return <div className="box">{children}</div>;
}

const  Circle = ({ children }) => {
  return <div className="circle">{children}</div>;
}

export const GsapControlTimeLines = () => {
    const [reversed, setReversed] = useState(false);
    const app = useRef();
    
    //Las referencias tambien se pueden usar para almacenar cualquier valor que desee conservar durante la vida util del componente
    const tl = useRef(); //Para evitar crear una nueva linea de tiempo en cada renderizado, es importante crear la linea de tiempo dentro de un efecto y almacenarla en un ref
    //Esto tambien nos permitira acceder a la llinea de tiempo en un useEffect diferente y alternar la deireccion de la linea de timempo    


    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
        // add a box and circle animation to our timeline and play on first render
        console.log("creating timeline");
        tl.current && tl.current.progress(0).kill();
        tl.current = gsap.timeline()
        .to(".box", {
            rotation: 360
        })
        .to(".circle", {
            x: 100
        });
        }, app);
        return () => ctx.revert();
    }, []);
    
    useEffect(() => {
        // toggle the direction of our timeline
        console.log("toggling reverse to", reversed);
        tl.current.reversed(reversed);    
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
