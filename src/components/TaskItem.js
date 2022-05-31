import React, { Component, createRef } from 'react';
import Control from './Control';
import { connect } from 'react-redux';
import { removeTask, updateTaskValue, toggleTaskCompletion } from '../features/taskList/taskListSlice';
import { setTaskGettingEdit, removeTaskGettingEdit, updateTaskGettingEdit } from '../features/taskGettingEdit/taskGettingEditSlice';
import './TaskItem.css';

class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.handleTaskSave = this.handleTaskSave.bind(this);
        this.handleTaskEdit = this.handleTaskEdit.bind(this);
        this.resizeTextarea = this.resizeTextarea.bind(this);
        this.textareaRef = createRef();
    }

    handleTaskEdit(){
        const { dispatch, taskItem } = this.props;
        const textarea = this.textareaRef.current;
        textarea.focus();
        textarea.selectionStart = textarea.selectionEnd = textarea.value.length;
        dispatch(setTaskGettingEdit(taskItem))
    }

    handleTaskSave(){
        const { dispatch, taskGettingEdit } = this.props;
        const { id, currentValue, originalValue } = taskGettingEdit;

        let task = currentValue.trim() || originalValue;

        if(task){
            dispatch(updateTaskValue({id, task}));
        }
        
        dispatch(removeTaskGettingEdit());
    }

    resizeTextarea(){
        const textarea = this.textareaRef.current;
        textarea.style.height = 'auto';
	    textarea.style.height = `${textarea.scrollHeight}px`;
    }

    componentDidMount(){
        this.resizeTextarea();
    }

    componentDidUpdate(){
        this.resizeTextarea();
    }

    render() {
        const {dispatch, taskGettingEdit, taskItem} = this.props;
        const {id, isCompleted, task} = taskItem;
        const isGettingEdit = id === taskGettingEdit.id;

        return (
            <li 
                className="task_item"
                onMouseEnter={() => this.resizeTextarea()}
                onMouseLeave={() => this.resizeTextarea()}
            >

                <label className="toggle_label">
                    <input 
                        type="checkbox" 
                        onChange={() => dispatch(toggleTaskCompletion(id))}
                        checked={isCompleted}
                    />
                </label>

                <textarea 
                    className={`task_text ${isCompleted ? 'completed' : ''}`} 
                    value={isGettingEdit ? taskGettingEdit.currentValue : task }
                    readOnly={!isGettingEdit}
                    onInput={e => dispatch(updateTaskGettingEdit(e.target.value))}
                    rows={1}
                    ref={this.textareaRef}
                    onClick={!isGettingEdit ? () => dispatch(toggleTaskCompletion(id)) : null}
                ></textarea>

                <div className="controls">
                    {!isGettingEdit ? (
                        <Control 
                            action={this.handleTaskEdit}
                            classNameValue="fas fa-pen"
                        />
                    ) : (
                        <Control 
                            action={this.handleTaskSave}
                            classNameValue="fas fa-save"
                        />
                    )}
                    <Control 
                        action={() => dispatch(removeTask(id))} 
                        classNameValue="fas fa-trash"
                    />
                </div>
            </li>
        );
    }
}
 
const mapStateToProps = state => {
    return state;
}
export default connect(mapStateToProps)(TaskItem);