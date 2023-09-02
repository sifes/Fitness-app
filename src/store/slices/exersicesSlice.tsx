import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IExercise } from '../../types';

interface IState {
    exercises: IExercise[],
    isBodyPartsShown: boolean
    selectedOptions: {
        [key: string]: string;
    },
    searchValue: string
}
const initialState: IState = {
    exercises: [],
    isBodyPartsShown: false,
    selectedOptions: {
        bodyPart: ''
    },
    searchValue: ''
}
const exercisesSlice = createSlice({
    name: 'exercises',
    initialState,
    reducers: {
        onOptionClick(state: IState, action: PayloadAction<{ title: string, name: keyof typeof state.selectedOptions }>) {
            switch (action.payload.name) {
                case 'bodyPart':
                    if (state.selectedOptions.bodyPart === action.payload.title) {
                        state.selectedOptions.bodyPart = ''
                    } else {
                        state.selectedOptions.bodyPart = action.payload.title
                    }
                    break;
                default:
                    return state
            }
        },
        setSearchValue(state: IState, action: PayloadAction<string>) {
            state.searchValue = action.payload
        },
        setExercises(state: IState, action: PayloadAction<IExercise[]>) {
            state.exercises = action.payload
        },
        toggleIsBodyPartShown(state: IState) {
            state.isBodyPartsShown = !state.isBodyPartsShown
        },
    },
});

export const { onOptionClick, setSearchValue, setExercises, toggleIsBodyPartShown } = exercisesSlice.actions;
export { exercisesSlice }




