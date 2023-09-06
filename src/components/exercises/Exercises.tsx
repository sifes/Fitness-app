import React from 'react'
import { Element } from 'react-scroll'
import { useExercisesSelector } from '../../hooks/store'
import { useGetExercisesQuery } from '../../store/api'
import ExerciseCard from './ExerciseCard'
import { ExercisesNotFound } from './ExercisesNotFound'
import { Pagination } from '../Pagination'
import { IExercise } from '../../types'
import { useActions } from '../../hooks/useActions'
import { filterByBodyPart, filterBySearch } from '../../utils/helpers'


interface IExercises { }

const Exercises: React.FC<IExercises> = () => {
    const { searchValue, exercises, pages } = useExercisesSelector()
    const { data, error, isLoading } = useGetExercisesQuery(``)

    const { setExercises, setTotalPagesCount } = useActions()

    function setData(ExercisesData: IExercise[]) {
        let Exercises = [...ExercisesData]
        // Exercises = filterByBodyPart(Exercises, selectedOptions.bodyPart)
        Exercises = filterBySearch(Exercises, searchValue)
        setTotalPagesCount(Math.ceil(Exercises.length / 6))
        return setExercises(Exercises.splice(6 * pages.current, 6))
    }
    React.useEffect(() => {
        if (!isLoading && data?.length) {
            setData([...data])
        }
    }, [data, searchValue, pages.current]) //selectedOptions

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error occured</div>
    return (
        <Element name='exercises' >
            {exercises.length ?
                <>
                    <Pagination />
                    <div className="exercises__cards cards-exercises">
                        {exercises.map(exerciseData => <ExerciseCard key={exerciseData.id} {...exerciseData} />)}
                    </div>
                </>
                : <ExercisesNotFound />}
        </Element>
    )
}

export { Exercises }