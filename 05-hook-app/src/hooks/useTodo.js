import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

//Initial State
const initialState = []

//Si es null, nos retorna un arreglo vacio
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodo = () => {
    //Recibe una referencia a la funcion Reducer y un estado inicial
    //Pasamos la funcion init, porque si no al recargar la pagina perdemos los todos, ya que el use effect cada que hay un cambio en los todos se ejecuta
    //Y al ejecutarse nuevamente, se nos carga el initial state en [], entonces inciamos el reducer con una funcion init
    const [todos, dispatch] = useReducer(todoReducer, initialState,init) //En este reducer tenemos alojado el estado
    //todos es el state que tiene la lista de tareas pendientes
    //dispatch cuando tenemos mas de un reducer, en el mismo componente, podemos poner dispatchTodo(distpatchNombreState)
    //Para indicar la funcion que despascha acciones a el reducer particular
    
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    

    const handleNewTodo = (todo) =>{
        const action = {
            type: '[TODO] Add todo',
            payload: todo
        }
        //Funcion que usammos para enviarle la accion al reducer
        dispatch(action)
    }

    const handleToggleTodo = (id) =>{
        dispatch({
            type:'[TODO] Toggle Todo',
            payload:id
        })
    }

    const handleDeleteTodo = (id) =>{
        dispatch({
            type: '[TODO] Remove todo',
            payload:id
        })

    }

    return {
        todos,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo=>!todo.done).length,
    }
}
