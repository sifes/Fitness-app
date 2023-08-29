import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IExercise } from '../../types';

interface IState {
    exercises: IExercise[],
    selectedBodyPart: string | null
}
const initialState: IState = {
    exercises: [],
    selectedBodyPart: null
}
const exercisesSlice = createSlice({
    name: 'exercises',
    initialState,
    reducers: {
        onBodyPartClick(state: IState, action: PayloadAction<string>) {
            state.selectedBodyPart = action.payload
        },
        setExercises(state: IState, action: PayloadAction<IExercise[]>) {
            state.exercises = action.payload
        }
    },
});

export const { onBodyPartClick, setExercises } = exercisesSlice.actions;
export default exercisesSlice.reducer;



