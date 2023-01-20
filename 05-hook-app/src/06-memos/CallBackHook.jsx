import React from 'react'
import { useEffect } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => {
    const [counter, setCounter] = useState(0)    
    
    // const increment = () =>{
    //     setCounter(counter+1)
    // }
    //useCallBack nos permite memorizar funciones
    const increment = useCallback(
      (value) => { //Los argumentos que recibe la funcion a memorizar, se reciben dentro de la callback que pasamos al useCallback, ya que la callback que le pasamos a el hook, es literamente la que vamos a ejecutar
        //setCounter(counter+1) Si lo dejamos asi, la funcion va a memorizar el counter tambier, entonces siempre va a quedar en uno cuando incrementemos
        //Debemos hacerlo de la siguiente manera
        setCounter((count) => count + value) //De esta manera no memoriza el valor del counter, sino que lo recibe por parametro y lo suma uno
    },
      [],
    )
    
    //Este es otro uso para el useCallBack (disparar un efecto cada que una funcion cambie)
    //-----------------------------------
    //Si no usamos el useCallback, la funcion al almacenarse siempre en una posicion de memoria dinstinta (esto se debe a que el useEffect dispara el renderizado nuevamente del componente)
    //se detecta como cambio y se dispara el useEffect, entonces caemos en un bucle infinito
    //useEffect(() => {
      //increment()
    //}, [increment]) //Queremos disparar el use effect cuando se detecta un cambio en la funcion
    


    return (
    <>
        <h1>useCallBack Hook: {counter}</h1>
        <hr />
        {/*Si usamos el Memo para el componente ShowIncrement y le pasamos una funcion, este se va a ejecutar siempre que se ejecute el padre, ya que al pasarle una funcion
          Cada vez que el padre se vuelva a renderizar, guarda la funcion en una posicion de memoria disinta, por lo tanto las props que se le pasan al componente memorizado cambian, y este lo detecta y se vuelve a ejecutar
        */}
        <ShowIncrement increment={increment}/>
        {/*Para que esto no suceda, lo que hacemos es memorizar la funcion con el hook useCallBack, y pasarle el valor de retorno al componente como prop */}
    </>
 )
}
