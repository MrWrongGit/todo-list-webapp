import { createStore } from 'redux'
import todoReducer from './reducers/todo'
import { render } from 'react-dom'
import App from './containers/App'
import { Provider } from 'react-redux'
import React from 'react'

let store = createStore(todoReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //添加调试工具

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
