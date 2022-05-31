import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialTaskList = JSON.parse(localStorage.getItem('taskList')) || [];

const taskListSlice = createSlice({
    name: 'taskList',
    initialState: initialTaskList,
    reducers: {
        addTask(taskList, action){
            taskList.push({
                task: action.payload,
                isCompleted: false,
                id: uuidv4(),
            });
        },
        removeTask(taskList, action){
            const index = taskList.findIndex(taskItem => taskItem.id === action.payload);
            taskList.splice(index, 1);
        },
        updateTaskValue(taskList, action){
            const { id, task } = action.payload;
            const index = taskList.findIndex(taskItem => taskItem.id === id);
            taskList[index].task = task;
        },
        toggleTaskCompletion(taskList, action){
            const index = taskList.findIndex(taskItem => taskItem.id === action.payload);
            taskList[index].isCompleted = !taskList[index].isCompleted;
        },
    }
});

export const { addTask, removeTask, updateTaskValue, toggleTaskCompletion } = taskListSlice.actions;

export default taskListSlice.reducer;