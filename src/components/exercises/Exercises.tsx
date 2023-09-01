import React from 'react'
import { Element } from 'react-scroll'
import { useCustomDispatch, useCustomSelector } from '../../hooks'
import { useGetExercisesQuery } from '../../store/api'
import { filterByBodyPart, filterBySearch } from '../../utils/helpers'
import { setExercises } from '../../store/slices/exersicesSlice'
import { IExercise } from '../../types'
import ExerciseCard from './ExerciseCard'
import { ExercisesNotFound } from './ExercisesNotFound'


interface IExercises { }

const Exercises: React.FC<IExercises> = () => {
    const dispatch = useCustomDispatch()
    const { selectedOptions, searchValue, exercises } = useCustomSelector(state => state.exercisesReducer)
    const { data, error, isLoading } = useGetExercisesQuery(``)  // 
    function helper(ExercisesData: IExercise[]) {
        let Exercises = [...ExercisesData]
        Exercises = filterByBodyPart(Exercises, selectedOptions.bodyPart)
        Exercises = filterBySearch(Exercises, searchValue)
        return setExercises(Exercises.splice(0, 6))
    }

    React.useEffect(() => {
        !isLoading ? dispatch(helper([...data || []])) : null
    }, [data, searchValue, selectedOptions])

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error occured</div>

    return (
        <Element name='exercises' >
            {exercises.length ?
                <div className="exercises__cards cards-exercises">
                    {exercises.map(exerciseData => <ExerciseCard key={exerciseData.id} {...exerciseData} />)}
                </div> :
                <ExercisesNotFound />}
        </Element>
    )
}

export { Exercises }