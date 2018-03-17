import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todo.js'

//pass state.dispatch in
const AddTodo = ( {dispatch} ) => {
	let inputRef

	return (
		<div>
			<input ref={(instance) => inputRef=instance}/>
			<button onClick={() => {
				if (!inputRef.value.trim()) {
            		return
				}
				//psss action
				dispatch(addTodo(inputRef.value))
				inputRef.value = ''
			}}>
			添加
			</button>
		</div>
	)
}

/*
	connect to react-redux Provider
	to get state.dispatch
*/
export default connect()(AddTodo)