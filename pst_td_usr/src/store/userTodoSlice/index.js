import { createSlice } from '@reduxjs/toolkit';

const userTodoSlice = createSlice({
    name: 'userTodos',
    initialState: {
        userTodos: [],
    },
    reducers: {
        renderUserTodo(state, action) {
            state.userTodos.push({
                userId: action.payload.id,
                id: new Date().toISOString().replace(/[-:.]/g, ''),
                title: action.payload.newUserTodo,
                completed: false,
            });
        },
        toggleCompleteUserTodo(state, action) {
            const toggledTodo = state.userTodos.find(
                (todo) => todo.id === action.payload.id
            );
            if(toggledTodo){
                toggledTodo.completed = !toggledTodo.completed;
            } else return
        },
        removeUserTodo(state, action) {
            state.userTodos = state.userTodos.filter(
                (todo) => todo.id !== action.payload.id
            );
        },
    },
});

export const { renderUserTodo, toggleCompleteUserTodo, removeUserTodo } = userTodoSlice.actions;

export default userTodoSlice.reducer;
