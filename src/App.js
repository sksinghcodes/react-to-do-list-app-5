import React, { Component } from 'react';
import AddTaskForm from './components/AddTaskForm';
import TasksList from './components/TasksList';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <AddTaskForm/>
                <TasksList/>
            </div>
        );
    }
}

export default App;