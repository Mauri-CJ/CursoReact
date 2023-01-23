export const todoReducer  = (intialState,action) =>{
    switch (action.type) {
        case '[TODO] Add todo':
            return [...intialState,action.payload]
        
        case '[TODO] Remove todo': //En el payload mandamos el id a eliminar
            return  intialState.filter(todo => todo.id !== action.payload)
    
        default:
            return intialState
    }

}