import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
    }),
    tagTypes: ['Todos', 'Users', 'Posts', 'userTodos'],
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => '/posts',
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }) => ({ type: 'Posts', id })),
                          { type: 'Posts', id: 'LIST' },
                      ]
                    : [{ type: 'Posts', id: 'LIST' }],
        }),
        getUsers: builder.query({
            query: () => '/users',
        }),
        getUser: builder.query({
            query: (id) => `/users/${id}`,
        }),
        getUserAlbums: builder.query({
            query: (id) => `/users/${id}/albums`,
        }),
        getUserTodos: builder.query({
            query: (id) => `/users/${id}/todos`,
            transformResponse: (res) => res.sort((a, b) => b.id - a.id),
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }) => ({
                              type: 'userTodos',
                              id,
                          })),
                          { type: 'userTodos', id: 'LIST' },
                      ]
                    : [{ type: 'userTodos', id: 'LIST' }],
        }),
        getUserPosts: builder.query({
            query: (id) => `/users/${id}/posts`,
        }),
        getTodos: builder.query({
            query: () => '/todos',
            transformResponse: (res) => res.sort((a, b) => b.id - a.id),
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }) => ({ type: 'Todos', id })),
                          { type: 'Todos', id: 'LIST' },
                      ]
                    : [{ type: 'Todos', id: 'LIST' }],
        }),
        addPost: builder.mutation({
            query: (post) => ({
                url: '/posts',
                method: 'POST',
                body: post,
            }),
            invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
        }),
        addTodo: builder.mutation({
            query: (todo) => ({
                url: '/todos',
                method: 'POST',
                body: todo,
            }),
            invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
        }),
        updateTodo: builder.mutation({
            query: (todo) => ({
                url: `/todos/${todo.id}`,
                method: 'PATCH',
                body: todo,
            }),
            invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
        }),
        deleteTodo: builder.mutation({
            query: ({ id }) => ({
                url: `/todos/${id}`,
                method: 'DELETE',
                body: id,
            }),
            invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
        }),
        addUserTodo: builder.mutation({
            query: (todo) => ({
                url: `/users/${todo.userId}/todos`,
                method: 'POST',
                body: todo,
            }),
            invalidatesTags: [{ type: 'userTodos', id: 'LIST' }],
        }),
        updateUserTodo: builder.mutation({
            query: (todo) => ({
                url: `/users/${todo.userId}/todos?id=${todo.id}`,
                method: 'PATCH',
                body: todo,
            }),
            invalidatesTags: [{ type: 'userTodos', id: 'LIST' }],
        }),
        deleteUserTodo: builder.mutation({
            query: (todo) => ({
                url: `/users/${todo.userId}/todos?id=${todo.id}`,
                method: 'DELETE',
                body: todo.id,
            }),
            invalidatesTags: [{ type: 'userTodos', id: 'LIST' }],
        }),
    }),
});

export const {
    useGetPostsQuery,
    useGetUsersQuery,
    useGetUserQuery,
    useGetUserAlbumsQuery,
    useGetUserTodosQuery,
    useGetUserPostsQuery,
    useGetTodosQuery,
    useAddPostMutation,
    useAddTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation,
    useAddUserTodoMutation,
    useUpdateUserTodoMutation,
    useDeleteUserTodoMutation,
} = apiSlice;
