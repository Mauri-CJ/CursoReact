import {getHeroesByOwner,getHeroeById} from "./Bases/Imports-Exports"

//const promesa = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//        const heroe = getHeroeById(2)
//        resolve(heroe)
//        //reject("No se pudo encontrar el heroe")
//    },2000)
//})
//
//promesa
//.then((heroe) => {console.log(heroe)})
//.catch((err) => {console.warn(err)})

const getHeroeByIdAsync = (id) => {
    //Podemos retornarla de una en vez de declararlo como constante
    const promesa = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const heroe = getHeroeById(id)
            heroe?resolve(heroe) : reject("No se pudo encontrar el heroe")
        },2000)
    })
     
    return promesa //Retornamos la promesa para poder usar desde afuera el then/catch/finally
}

getHeroeByIdAsync(10)
    .then(heroe => console.log(heroe)) // .then(console.log)
    .catch(err => console.warn(err))  //  .catch(console.warn)
    //Si solo recibimos un parametro, podemos directamente ejecutar la funcion y recibe el parametro automaticamente