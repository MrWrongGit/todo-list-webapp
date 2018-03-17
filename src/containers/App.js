import AddTodo from '../components/AddTodo'
import ShowList from '../components/TodoList'
import React from 'react'

const App = () => (
	<div>
		<h3>添加事项</h3>
		<AddTodo />
		<h3>待办事项</h3>
		<ShowList completed={false}/>
		<h3>完成事项</h3>
		<ShowList completed={true}/>
	</div>
)

export default App