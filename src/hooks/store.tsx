import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { useSelector } from "react-redux";

export const useCustomDispatch = () => useDispatch<AppDispatch>();
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useExercisesSelector = () => useCustomSelector(state => state.exercisesReducer)
export const useOptionsSelector = () => useCustomSelector(state => state.optionsReducer)

