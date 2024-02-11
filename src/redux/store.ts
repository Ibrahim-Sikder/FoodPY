import { configureStore } from "@reduxjs/toolkit";
import foodReducer from './feature/foodSlice'

export const store = configureStore({
    reducer:{
        food: foodReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch