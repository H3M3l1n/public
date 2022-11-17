import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
    },
    reducers: {
        renderPost(state, action) {
            state.posts.push({
                id: new Date().toISOString().replace(/[-:.]/g, ''),
                body: action.payload,
            });
        },
    },
});

export const { renderPost } = postSlice.actions;

export default postSlice.reducer;
