import React from 'react';
import $ from 'jquery';
//import styles from 'components/App.css';

import HeaderNavigation from './HeaderNavigation';
import CreateTodo from './create-todo';
import TodoList from './todos-list';


const todos = [
{
	task: 'make React tutorial',
	isCompleted : false
},{
	task: 'eat dinner',
	isCompleted : true
}
];

export default class App extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			todos
		};
	}
	render(){
		return (
				<div style={{marginTop : '80px',marginLeft : '20px'}}>
					<HeaderNavigation />
					<CreateTodo todos={this.state.todos} createTask = {this.createTask.bind(this)}/>
					<TodoList 
					todos={this.state.todos}
					toggleTask={this.toggleTask.bind(this)}
					saveTask = {this.saveTask.bind(this)}
					deleteTask={this.deleteTask.bind(this)}
					/>
				</div>
			);
	}
	toggleTask(task){
		//_find -> finds the 1st element that matches the condition
		//todos.task === task find the task matching to task we passed on
		const foundTodo = _.find(this.state.todos, todos => todos.task === task);
		//swap the isCompleted to opposite
		foundTodo.isCompleted = !foundTodo.isCompleted;
		this.setState({todos: this.state.todos});
	}
	createTask(task){
		this.state.todos.push({
			task, // similar to task: task
			isCompleted : false
		});
		//refresh the page with new todos
		this.setState({todos : this.state.todos});
	}
	saveTask(oldTask, newTask){
		const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask)
		foundTodo.task = newTask;
		this.setState({todos: this.state.todos});
	}
	deleteTask(taskToDelete){
		_.remove(this.state.todos, todo => todo.task === taskToDelete);
		this.setState({todos : this.state.todos});
	}
}