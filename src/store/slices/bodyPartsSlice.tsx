import { createSlice } from '@reduxjs/toolkit';

const bodyPartsSlice = createSlice({
    name: 'bodyParts',
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
    },
});

export const { increment, decrement } = bodyPartsSlice.actions;
export default bodyPartsSlice.reducer;