import { configureStore } from '@reduxjs/toolkit'
import { breadcrumbsReducer } from './reducers/breadcrumbsReducer'

export const store = configureStore({
  reducer: {
    breadcrumbs: breadcrumbsReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch