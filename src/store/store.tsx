import { configureStore } from "@reduxjs/toolkit";
import { apiAll } from "./apiAll";
import exercisesReducer from './slices/exersicesSlice'
import { apiName } from "./apiName";
export const store = configureStore({
    reducer: {
        exercisesReducer,
        [apiAll.reducerPath]: apiAll.reducer,
        [apiName.reducerPath]: apiName.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiName.middleware).concat(apiAll.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
