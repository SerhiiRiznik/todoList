import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todolistsReducer from "./todolistsReducer";


const rootReducer = combineReducers({
   todoLists: todolistsReducer,
})
export const store = configureStore({
   reducer: rootReducer,
})



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch