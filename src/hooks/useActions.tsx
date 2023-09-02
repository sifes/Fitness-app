import React from 'react'
import { useCustomDispatch } from "./store"
import { bindActionCreators } from '@reduxjs/toolkit'
import { exercisesSlice } from "../store/slices/exersicesSlice";

const rootActions = {
    ...exercisesSlice.actions
}

export const useActions = () => {
    const dispatch = useCustomDispatch()

    return React.useMemo(() =>
        bindActionCreators(rootActions, dispatch)
        , [dispatch])
}