import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IExercise } from '../../types';

interface IState {
    exercises: IExercise[],
    selectedBodyPart: string | null,
    searchValue: string
}
const initialState: IState = {
    exercises: [],
    selectedBodyPart: 'lower legs',
    searchValue: ''
}
const exercisesSlice = createSlice({
    name: 'exercises',
    initialState,
    reducers: {
        onBodyPartClick(state: IState, action: PayloadAction<string>) {
            state.selectedBodyPart = action.payload
        },
        setSearchValue(state: IState, action: PayloadAction<string>) {
            state.searchValue = action.payload
        },
        setExercises(state: IState, action: PayloadAction<IExercise[]>) {
            state.exercises = action.payload
        },
    },
});

export const { onBodyPartClick, setSearchValue, setExercises } = exercisesSlice.actions;
export default exercisesSlice.reducer;



