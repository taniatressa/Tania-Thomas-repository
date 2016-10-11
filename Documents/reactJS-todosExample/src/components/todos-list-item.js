import _ from 'lodash';
import React from 'react';
import Button from 'react-bootstrap/lib/Button';


export default class TodosListItem extends React.Component{
	constructor(props){
			super(props);
			this.state = {
				isEditing: false,
				error:null
			};
	}
	renderError(){
		if(!this.state.error){return null;}
		return <div style={{color : 'red'}}>{this.state.error}</div>;
	}
	renderTaskSection(){
		//const{taskm isCompleted} --> es6 we passed these in todo-list.js
		const { task, isCompleted } = this.props;
		//console.log(this.props);
        const taskStyle = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        };
        if(this.state.isEditing){
        	//on edit show an input box 
        	return(
        			<td>
        				<form onSubmit={this.onSaveClick.bind(this)}>
        					<input type="text" defaultValue={task} ref="editInput"/>
        				</form>

        			</td>
        		);
        }
		return(

				<td style={taskStyle} 
					onClick={this.props.toggleTask.bind(this,task)}
				>
					{task}
				</td>
			);
	}
	renderActionSection(){
		if(this.state.isEditing){
			return (
				<td>
					<Button bsStyle='primary' style={{marginRight : '5px'}} onClick={this.onSaveClick.bind(this)}>Save</Button>
					<Button bsStyle='primary' onClick={this.onCancelClick.bind(this)}>Cancel</Button>
				</td>
				);
		}
		return (
			<td>
				<Button  bsStyle='primary' style={{marginRight : '5px'}} onClick={this.onEditClick.bind(this)}>Edit</Button>
				<Button bsStyle='primary' onClick={this.props.deleteTask.bind(this,this.props.task)}>Delete</Button>
			</td>
			);
	}

	render(){
		
		return (
					
						<tr>
							{this.renderTaskSection()}
							{this.renderActionSection()}
							{this.renderError()}
						</tr>
					
			);
	}
	onEditClick(){
		this.setState({isEditing:true});
	}
	onCancelClick(){
		this.setState({isEditing:false});
	}
	onSaveClick(event){
		event.preventDefault();
		const oldTask = this.props.task;
		const newTask = this.refs.editInput.value;
		
		const validateInput = this.validateInput(newTask);
		console.log(validateInput);
		if(validateInput){
			this.setState({error : validateInput});
			return;
		}
		this.setState({error: null});
		this.props.saveTask(oldTask,newTask);
		this.setState({isEditing:false});
	}

	validateInput(task){
		console.log(this.props.task);
		if(!task){
			return 'Please enter a task';
		}else if (_.find(this.props, todo => todo.task === task)){
			return 'Task already entered!!'
		}else{
			return null;
		}
	}
	
}