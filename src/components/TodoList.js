import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions/todo.js'

const ShowList = ( {wholeList, dispatch, completed} ) => {
	return (
		<ul>
			{wholeList.map((item, index) => {
				if(item.completed == completed){
					return <li key={index} onClick={()=>{dispatch(toggleTodo(index))}}>
						{item.text}
					</li>
				}
			})}
		</ul>
	)
}

const TodoList = ({ wholeList, dispatch}) => <ShowList wholeList={wholeList} dispatch={dispatch} completed={false} />
const CompList = ({ wholeList, dispatch}) => <ShowList wholeList={wholeList} dispatch={dispatch} completed={true} />

/*
function todoFilter(listElement) {
    return listElement.completed == false;
}

function compFilter(listElement) {
    return listElement.completed == true;
}*/

/*直接 TodoList = ({ state }) 是获取不到store.state的
需要通过mapStateToProps传递给connect
connect才会将state向下传递*/
const mapStateToProps = state => ({
	wholeList: state
})

export default connect(mapStateToProps)(ShowList)