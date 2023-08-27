import { createSlice } from '@reduxjs/toolkit';
import { api } from '../api';

interface IState {

}
const initialState: IState = {

}
const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(api.endpoints.getExercises.matchFulfilled, (state, action) => {

        });
    }
});

export const { } = apiSlice.actions;
export default apiSlice.reducer;