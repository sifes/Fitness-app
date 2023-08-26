import { configureStore } from "@reduxjs/toolkit";
import bodyPartsReducer from "./slices/bodyPartsSlice";
export const store = configureStore({
    reducer: {
        bodyParts: bodyPartsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
