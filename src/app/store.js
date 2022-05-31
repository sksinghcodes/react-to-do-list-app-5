import { configureStore } from '@reduxjs/toolkit';
import taskListReducer from '../features/taskList/taskListSlice';
import newTaskFormReducer from '../features/newTaskForm/newTaskFormSlice';
import taskGettingEditReducer from '../features/taskGettingEdit/taskGettingEditSlice';

export const store = configureStore({
    reducer: {
        taskList: taskListReducer,
        newTaskInput: newTaskFormReducer,
        taskGettingEdit: taskGettingEditReducer,
    }
})