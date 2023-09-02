import React from 'react'
import { Element } from 'react-scroll'
import { useExercisesSelector } from '../../hooks/store'
import { useGetExercisesQuery } from '../../store/api'
import { filterByBodyPart, filterBySearch } from '../../utils/helpers'
import { IExercise } from '../../types'
import ExerciseCard from './ExerciseCard'
import { ExercisesNotFound } from './ExercisesNotFound'
import { useActions } from '../../hooks/useActions'


interface IExercises { }

const Exercises: React.FC<IExercises> = () => {
    const { setExercises } = useActions()

    const { selectedOptions, searchValue, exercises } = useExercisesSelector()
    const { data, error, isLoading } = useGetExercisesQuery(``)

    function helper(ExercisesData: IExercise[]) {
        let Exercises = [...ExercisesData]
        Exercises = filterByBodyPart(Exercises, selectedOptions.bodyPart)
        Exercises = filterBySearch(Exercises, searchValue)
        return setExercises(Exercises.splice(0, 6))
    }

    React.useEffect(() => {
        !isLoading ? helper([...data || []]) : null
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