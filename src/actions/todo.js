export const ADD_TODO  = 'add_todo'
export const TOGGLE_TODO = 'toggle_todo'

export const addToTodoList = (text) => ({
	type 	: ADD_TODO,
	payload : text
})

export const toggleTodo = (id) => ({
	type 	: TOGGLE_TODO,
	payload : id
})
