import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
//Creamos un componente que le pasamos mediante props informacion para poner dentro de sus atributos y poder selectivos
//Cuando tenemos reutilizacion de componentes, de esta manera si tenemos varios componentes iguales, seleccionamos cual vamos a animar


const Box = ({ children, className, anim }) => {
    /* Podemos pasar propiedades a los hijos para ajustar los nombres de las clases y/o los atriibutos y apuntar a elementos especificos, estos se pasan a la hora de crear el componente*/
    return <div className={"box " + className } data-animate={ anim }>{children}</div>;
    
};

export const GsapReutilizarComponents = () => {
    const app = useRef();
  
    useLayoutEffect(() => {
      
      const ctx = gsap.context(() => { //Referenciamos al elemento padre, para pasarle el contexto de los elementos hijos que vamos a animar
        gsap.to("[data-animate='rotate']", {
          rotation: 360,
          repeat: -1, //Se repinte infinitamente
          repeatDelay: 1, //Con este tiempo de delay
          yoyo: true //Vuelve a su estado incial usando la animacion
        });
        
        gsap.to("[data-animate='move']", {
          x: 100,
          repeat: -1,
          repeatDelay: 1,
          yoyo: true
        });
        
        gsap.set(".dont-animate", {
          backgroundColor: 'red'
        });
        
      }, app);// <- Scope!
      
      return () => ctx.revert();
    }, []);
    
    return (
      <div className="app" ref={app}>
        <Box anim="rotate">Box</Box> {/* Podemos pasar propiedades a los hijos para ajustar los nombres de las clases y/o los atriibutos y apuntar a elementos especificos*/}
        <Box className="dont-animate">Don't Animate Me</Box>
        <Box anim="move">Box</Box>
      </div>
    );
}
