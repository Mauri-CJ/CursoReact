import React, { useEffect, useReducer } from 'react'
import { useTodo } from '../hooks/useTodo'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { todoReducer } from './todoReducer'

export const TodoApp = () => {
    const {todos,todosCount,pendingTodosCount,handleDeleteTodo,handleNewTodo,handleToggleTodo} = useTodo()
    return (
    <>
        <h1>Todos ({todosCount}),  pendientes : {pendingTodosCount}</h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList 
                    todos={todos} 
                    onDeleteTodo={id => handleDeleteTodo(id)}
                    onToggleTodo = {handleToggleTodo} //Recibe id tambien, como el onDeleteTodo
                />
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
