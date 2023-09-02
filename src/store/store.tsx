import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import { exercisesSlice } from "./slices/exersicesSlice";
export const store = configureStore({
    reducer: {
        exercisesReducer: exercisesSlice.reducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
