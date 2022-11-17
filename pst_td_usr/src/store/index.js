import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';
import postReducer from './postSlice';
import todoReducer from './todoSlice';
import userTodosSlice from './userTodoSlice';

export const store = configureStore({
    reducer: {
        posts: postReducer,
        todos: todoReducer,
        userTodos: userTodosSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});
