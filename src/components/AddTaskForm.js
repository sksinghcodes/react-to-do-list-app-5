import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../features/taskList/taskListSlice';
import { updateNewTaskInput } from '../features/newTaskForm/newTaskFormSlice';

import './AddTaskForm.css';

class AddTaskForm extends Component {
    constructor(props) {
        super(props);
        this.handleTaskSubmit = this.handleTaskSubmit.bind(this);
    }

    handleTaskSubmit(){
        const task = this.props.newTaskInput.value.trim();
        if(task) {
            this.props.dispatch(addTask(task));
        }
        this.props.dispatch(updateNewTaskInput(""));
    }

    render() {
        const {newTaskInput, dispatch} = this.props;
        return (
            <div className="add_task_form">
                <input 
                    type="text" 
                    value={newTaskInput.value}
                    onInput={e => dispatch(updateNewTaskInput(e.target.value))}
                    onKeyPress={e => {if( e.key === "Enter" ) this.handleTaskSubmit();}}
                    placeholder="Type here..."
                />
                <button
                    className="fas fa-plus"
                    onClick={this.handleTaskSubmit}
                ></button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(AddTaskForm);