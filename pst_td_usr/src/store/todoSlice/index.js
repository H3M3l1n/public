import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
        renderTodo(state, action) {
            state.todos.push({
                id: new Date().toISOString().replace(/[-:.]/g, ''),
                title: action.payload.newTodo,
                completed: false,
            });
        },
        toggleComplete(state, action) {
            const toggledTodo = state.todos.find(
                (todo) => todo.id === action.payload.id
            );
            if(toggledTodo){
                toggledTodo.completed = !toggledTodo.completed;
            } else return
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload.id
            );
        },
    },
});

export const { renderTodo, toggleComplete, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
