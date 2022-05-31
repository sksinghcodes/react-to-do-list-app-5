import { createSlice } from '@reduxjs/toolkit';

const initialTaskGettingEdit = {
    id: '',
    originalValue: '',
    currentValue: '',
    isCompleted: false,
}

const taskGettingEditSlice = createSlice({
    name: 'taskGettingEdit',
    initialState: initialTaskGettingEdit,
    reducers: {
        setTaskGettingEdit(taskGettingEdit, action) {
            const { id, task, isCompleted } = action.payload;
            taskGettingEdit.id = id;
            taskGettingEdit.originalValue = taskGettingEdit.currentValue = task;
            taskGettingEdit.isCompleted = isCompleted;
        },
        removeTaskGettingEdit(taskGettingEdit) {
            taskGettingEdit.id = taskGettingEdit.originalValue = taskGettingEdit.currentValue = '';
            taskGettingEdit.isCompleted = false;
        },
        updateTaskGettingEdit(taskGettingEdit, action) {
            taskGettingEdit.currentValue = action.payload;
        }
    }
});

export const { setTaskGettingEdit, removeTaskGettingEdit, updateTaskGettingEdit } = taskGettingEditSlice.actions;

export default taskGettingEditSlice.reducer;