export const todoReducer  = (initialState,action) =>{
    switch (action.type) {
        case '[TODO] Add todo':
            return [...initialState,action.payload]
        
        case '[TODO] Remove todo': //En el payload mandamos el id a eliminar
            return  initialState.filter(todo => todo.id !== action.payload)

        case '[TODO] Toggle Todo':
            return initialState.map(todo =>{
                if(todo.id === action.payload){
                    return {...todo,done: !todo.done}
                } //id

                return todo
            })
    
        default:
            return initialState
    }

}