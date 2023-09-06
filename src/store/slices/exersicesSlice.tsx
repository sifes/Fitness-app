import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IExercise } from '../../types';

interface IState {
    exercises: IExercise[],

    searchValue: string,
    pages: {
        totalCount: number,
        current: number,
    }
}
const initialState: IState = {
    exercises: [],
    searchValue: '',
    pages: {
        totalCount: 0,
        current: 0,
    }
}
const exercisesSlice = createSlice({
    name: 'exercises',
    initialState,
    reducers: {
        setSearchValue(state: IState, action: PayloadAction<string>) {
            state.searchValue = action.payload
        },
        setExercises(state: IState, action: PayloadAction<IExercise[]>) {
            state.exercises = action.payload
        },
        setTotalPagesCount(state: IState, action: PayloadAction<number>) {
            state.pages.totalCount = action.payload
        },
        setCurrentPagesCount(state: IState, action: PayloadAction<number>) {
            state.pages.current = action.payload
        },
    },
});

export { exercisesSlice }




