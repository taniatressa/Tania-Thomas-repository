import _ from 'lodash';
import React from 'react';
import Button from 'react-bootstrap/lib/Button';

import TodoListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class CreateTodo extends React.Component{
constructor(props){
	super(props)
	this.state = {
		error: null
	};
}
renderError(){
	if(!this.state.error){return null;}
	return <div style={{color : 'red'}}>{this.state.error}</div>;

}
	//ref is the identifier for the dom element. to grab the value in the input
	render(){
		return (
				<form  onSubmit={this.handleCreate.bind(this)}>
					<input type="text"  placeholder="what do I need to do?" ref="createInput"/>
					<button style={{marginLeft : '5px',borderRadius:'3px'}} >Create</button>
					{this.renderError()}
				</form>
			);
	}
	//this function is used to bind 'this' in create-todo.js as well as app.js 
	//updates the value on create to the list
	handleCreate(event){
		event.preventDefault();
		const createInput = this.refs.createInput;
		const task = createInput.value;
		const validateInput = this.validateInput(task);
		//console.log(this.refs.createInput.value); gives the value in the input 
		//if error is there shows the error
		if(validateInput){
			this.setState({error : validateInput});
			return;
		}
		//if no error displays reset error state to null
		this.setState({error:null});
		this.props.createTask(task);
		this.refs.createInput.value = '';

	}
	validateInput(task){
		if(!task){
			return 'Please enter a task';
		}else if (_.find(this.props.todos, todo => todo.task === task)){
			return 'Task already entered!!'
		}else{
			return null;
		}
	}
}