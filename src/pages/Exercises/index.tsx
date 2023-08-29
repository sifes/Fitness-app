import React from 'react'
import Search from '../../components/exercises/Search'
import { IExercise } from '../../types'
import ExerciseCard from '../../components/exercises/ExerciseCard'
import BodyParts from '../../components/exercises/bodyParts/BodyParts'
import { useGetExercisesQuery } from '../../store/api'
import { useCustomDispatch, useCustomSelector } from '../../hooks'
import { setExercises } from '../../store/slices/exersicesSlice'

const Exercises: React.FC = () => {
    const dispatch = useCustomDispatch()
    const { selectedBodyPart, searchValue, exercises } = useCustomSelector(state => state.exercisesReducer)
    const { data, error, isLoading } = useGetExercisesQuery(`bodyPart/${selectedBodyPart}`)  // 

    function helper(arr: IExercise[], pages: number) {
        const EXERCISES = [...arr]
        if (searchValue) {
            EXERCISES.filter((item) => item.bodyPart.includes(searchValue) || item.equipment.includes(searchValue) || item.name.includes(searchValue) || item.target.includes(searchValue))

        }
        return setExercises(EXERCISES.splice(0, 9))
    }

    React.useEffect(() => {
        const ExercisesData = data ? [...data] : [] as IExercise[]
        data ? dispatch(helper(ExercisesData, 1)) : null
    }, [data])


    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error occured</div>

    console.log(exercises);

    const array: IExercise[] = [
        { bodyPart: "neck", equipment: "body weight", gifUrl: "https://api.exercisedb.io/image/QDlmaKiO8LQX4A", id: "0716", name: "side push neck stretch", target: "levator scapulae", },
        { bodyPart: "neck", equipment: "body weight", gifUrl: "https://api.exercisedb.io/image/RfHODIySokMbJK", id: "1403", name: "neck side stretch", target: "levator scapulae", },
        { bodyPart: "neck", equipment: "body weight", gifUrl: "https://api.exercisedb.io/image/QDlmaKiO8LQX4A", id: "1404", name: "neck side stretch", target: "levator scapulae", },
        { bodyPart: "neck", equipment: "body weight", gifUrl: "https://api.exercisedb.io/image/RfHODIySokMbJK", id: "1405", name: "neck side stretch", target: "levator scapulae", },
    ]
    return (
        <div className='container'>
            <div className="exercises">
                <h2 className="exercises__title">Get Awesome Exersices!</h2>
                <Search />
                <BodyParts />
                <div className='exercises__cards' >
                    {exercises.length ? exercises.map(exerciseData => <ExerciseCard key={exerciseData.id} {...exerciseData} />) : ''}
                </div>
            </div>
        </div>
    )
}

export default Exercises