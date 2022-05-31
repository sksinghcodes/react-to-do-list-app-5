import React, { Component, Fragment } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import './TasksList.css';

class TasksList extends Component {
    componentDidUpdate(){
        localStorage.setItem('taskList', JSON.stringify(this.props.taskList));
    }

    componentWillUnmount(){
        localStorage.setItem('taskList', JSON.stringify(this.props.taskList));
    }

    render(){
        const { taskList } = this.props;
        return (
            <ul className="tasks_list">
                {taskList.map(taskItem => (
                    <Fragment key={taskItem.id}>
                        <TaskItem
                            taskItem={taskItem}
                        /> 
                    </Fragment>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(TasksList);