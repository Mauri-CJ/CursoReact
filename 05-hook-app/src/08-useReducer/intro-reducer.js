//Estado incial en que se encuentra mi aplicacion

//Estado con listas de tareas 
const intialState = [
    {
        id:1,
        todo:"Tarea 1",
        done:false  
    }
]
//Nuevo todo a agregar
const newTodo = {
    id:2,
    todo:"Tarea 2",
    done:false
}

//Definicion del reducer 
//El reducer en todo momento debe saber cual es el estado anterior 
const todoReducer = (state = intialState,action = {}) =>{ //Si no envian ninguna action, le pasamos un objeto vacio 
    if(action.type === '[TODO] add todo'){
        //state.push(action.payload) NO SE DEBE HACER 
        return [...state,action.payload]
    }

    return state
}

//Nos guardamos el nuevo estado, luego de llamar el reducer 
let todos = todoReducer()

const addTodoAction = {
    type:'[TODO] add todo', //Es un string que indica el nombre de la accion
    payload:newTodo //Informacion que le quiero mandar a la accion
}


todos = todoReducer(todos, addTodoAction)

console.log({state:todos})