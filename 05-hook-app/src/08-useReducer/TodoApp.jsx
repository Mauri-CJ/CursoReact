import React, { useEffect, useReducer } from 'react'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { todoReducer } from './todoReducer'


//Initial State
const initialState = []

//Si es null, nos retorna un arreglo vacio
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {
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

    const handleDeleteTodo = (id) =>{
        dispatch({
            type: '[TODO] Remove todo',
            payload:id
        })

    }

    return (
    <>
        <h1>Todos (10),  pendientes : 2</h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList todos={todos} onDeleteTodo={id => handleDeleteTodo(id)}/>
            </div>
        </div>
        
     <div className="col-5">
        <h4>Agregar TODO</h4>
        <hr />
        <TodoAdd onNewTodo={todo => handleNewTodo(todo)}/> {/* onNewTodo = {handleNewTodo} */}
     </div>

    </>
  )
}
