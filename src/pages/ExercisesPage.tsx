import React from 'react'
import Search from '../components/exercises/Search'
import { IExercise } from '../types'
import ExerciseCard from '../components/exercises/ExerciseCard'
import BodyParts from '../components/exercises/bodyParts/BodyParts'
import { useGetExercisesQuery } from '../store/api'
import { useCustomDispatch, useCustomSelector } from '../hooks'
import { setExercises } from '../store/slices/exersicesSlice'
import { validateString } from '../utils/helpers'
import { Element } from 'react-scroll'

const ExercisesPage: React.FC = () => {
    const dispatch = useCustomDispatch()
    const { selectedBodyPart, searchValue, exercises } = useCustomSelector(state => state.exercisesReducer)
    const { data, error, isLoading } = useGetExercisesQuery(``)  // 
    function helper(arr: IExercise[], pages: number) {
        let EXERCISES = [...arr]
        if (searchValue) {
            const seaVal = validateString(searchValue)
            EXERCISES = EXERCISES.filter((item) => item.bodyPart.includes(selectedBodyPart))
            EXERCISES = EXERCISES.filter((item) => validateString(item.bodyPart).includes(seaVal) || validateString(item.equipment).includes(seaVal) || validateString(item.name).includes(seaVal) || validateString(item.target).includes(seaVal))
        }
        return setExercises(EXERCISES.splice(0, 9))
    }

    React.useEffect(() => {
        console.log('work');
        data ? dispatch(helper([...data], 1)) : null
    }, [data, searchValue])


    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error occured</div>

    // const array: IExercise[] = [
    //     { bodyPart: "neck", equipment: "body weight", gifUrl: "https://api.exercisedb.io/image/QDlmaKiO8LQX4A", id: "0716", name: "side push neck stretch", target: "levator scapulae", },
    //     { bodyPart: "neck", equipment: "body weight", gifUrl: "https://api.exercisedb.io/image/RfHODIySokMbJK", id: "1403", name: "neck side stretch", target: "levator scapulae", },
    //     { bodyPart: "neck", equipment: "body weight", gifUrl: "https://api.exercisedb.io/image/QDlmaKiO8LQX4A", id: "1404", name: "neck side stretch", target: "levator scapulae", },
    //     { bodyPart: "neck", equipment: "body weight", gifUrl: "https://api.exercisedb.io/image/RfHODIySokMbJK", id: "1405", name: "neck side stretch", target: "levator scapulae", },
    // ]
    return (
        <div className='container'>
            <div className="exercises">
                <h2 className="exercises__title">Get Awesome Exersices!</h2>
                <Search />
                <BodyParts />
                <Element name='exercises' className='exercises__cards' >
                    {exercises.length ? exercises.map(exerciseData => <ExerciseCard key={exerciseData.id} {...exerciseData} />) : ''}
                </Element>
            </div>
        </div>
    )
}

export default ExercisesPage