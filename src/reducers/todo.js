import { ADD_TODO, TOGGLE_TODO } from '../actions/todo.js'

const todoReducer = (state=[], action) => {
	switch(action.type) {
		case ADD_TODO:
			return [
				//add new
				{
					text : action.payload,
					completed : false,
				},
				...state
			]

		case TOGGLE_TODO:
			console.log("TOGGLE_TODO")
			let newState = []
			Object.assign(newState, state)
			newState[action.payload].completed = !newState[action.payload].completed
			console.log(newState)
          	return newState;

		default:
			return state;
	}
}

export default todoReducer