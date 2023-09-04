import React from 'react'
import { useCustomDispatch } from "./store"
import { bindActionCreators } from '@reduxjs/toolkit'
import { exercisesSlice } from "../store/slices/exersicesSlice";
import { bodySlice } from "../store/slices/bodySlice";

const rootActions = {
    ...exercisesSlice.actions,
    ...bodySlice.actions
}

export const useActions = () => {
    const dispatch = useCustomDispatch()

    return React.useMemo(() =>
        bindActionCreators(rootActions, dispatch)
        , [dispatch])
}