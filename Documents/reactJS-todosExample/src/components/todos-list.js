import _ from 'lodash';
import React from 'react';

import TodoListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';
import Table from 'react-bootstrap/lib/Table';

export default class TodosList extends React.Component{
	//rendr each individually,to iterate thru all the props used lodash library
	renderItems(){
		// _.omit just omit the prop that we dont want
		//console.log(this.props);
		const props = _.omit(this.props, 'todos');
		//to do all like edit delete etc at one step, we will pass props as well in the return.
		//so instead of passing all props we omit some props and then pass req one
		return _.map(this.props.todos, (todo,index) => <TodosListItem key={index
		}{...todo} {...props}/>);


	}
	/*above renderItems in es6 is similar to below code
		function(todo,index){
			return <TodosListItem />
		}
		
	task = {todo.task} isCompleted={todo.isCompleted}
		*/

	render(){
		//console.log(this.props.todos);
		return (
				<Table className="table table-hover">
						<TodoListHeader/>
						<tbody>
							{this.renderItems()}
						</tbody>
				</Table>
			);
	}
}