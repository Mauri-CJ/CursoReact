//Funcion reducer, que maneja estados complejos
import { types } from "../types/types";

//RECORDATORIO, LOS REDUCER NO PUEDEN LLAMAR FUNCIONES EXTERNAS, TIENEN QUE RESOLVER TODOS LO QUE HACE SIN LLAMAR FUNCIONES EXTERNAS
export const authReducer = (state={},action) =>{
    switch (action.type) {
        case types.login:
            return {
                ...state, //Esta destructuracion de estado se hace por si en un futuro tenemos mas atributos en el estado para mantener el estado anterior
                logged:true,
                user:action.payload
            }

        case types.logout:
            return {
                ...state, 
                logged:false,
                user:null
            } 
    
        default:
            return state 
    }
}