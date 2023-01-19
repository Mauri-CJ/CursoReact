import gsap from 'gsap';
import { useRef,useLayoutEffect,useState } from 'react'

//export const GsapWithHooks = () => {
//    const boxRef = useRef();
//
//    useLayoutEffect(() => {
//        console.log(boxRef) 
//        gsap.to(boxRef.current, {rotation: "+360"})
//    });
//
//    return (
//    <div className="App">
//        <div className="box" ref={boxRef}>Gsap Component</div>
//    </div>
//    );
//
//}
//

export const GsapWithHooks = () => {
    const app = useRef(); //Referencia al elemento raiz que contiene los dos elementos que van a ser animados
    const circle = useRef();
    
    useLayoutEffect(() => {
      let ctx = gsap.context(() => { //Animamos a traves de la referencia al componente raiz que tiene los demas elementos
        // use scoped selectors
        gsap.to(".box", { rotation: 360 }); //Podemos usar la notacion de css, selecciona todos los elementos .box dentro del componente raiz
        // or refs
        gsap.to(circle.current, { rotation: 360 }); //Podemos usar la referencia directa que creamos previamente 
        
      }, app); //Se le pasa al context el el ref al elemento raiz
      
      return () => ctx.revert(); //Limpia animaciones, es una buena practica para no tener comportamientos inesperados
    }, []) //Array vacio para que se ejecute solo cuando se crea/monta el componente
  
    return (
      <div ref={app} className="App">
        <div className="box">selector</div>
        <div className="circle" ref={circle}>Ref</div>
      </div>
    );
}
