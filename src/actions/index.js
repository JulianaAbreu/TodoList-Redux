let nextTodoId = 0;
//actions-> envia dados para a store
//text: vai add
export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}
export const removeTodo = id => {
    
}
export const setVisibilityFilter = filter => {
    return {
        type:'SET_VISIBILITY_FILTER',
        filter
    }
}

export const toggleTodo = id => {
    return {
        type:'TOGGLE_TODO',
        id
    }
}

