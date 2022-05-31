import { createSlice } from '@reduxjs/toolkit';

const initialNewTaskInput = {
    value: '',
}

const newTaskFormSlice = createSlice({
    name: 'newTaskInput',
    initialState: initialNewTaskInput,
    reducers: {
        updateNewTaskInput(newTaskInput, action) {
            newTaskInput.value = action.payload;
        }
    }
});

export const { updateNewTaskInput } = newTaskFormSlice.actions;

export default newTaskFormSlice.reducer;