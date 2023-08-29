import React from 'react'
import Categories from '../../components/exercises/categories/Categories'
import Search from '../../components/exercises/Search'
import { IExercise } from '../../types'
import ExerciseCard from '../../components/exercises/ExerciseCard'

const Exercises: React.FC = () => {
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
                <Categories />
                <div className='exercises__cards' >
                    {array.map(exerciseData => <ExerciseCard key={exerciseData.id} {...exerciseData} />)}
                </div>
            </div>
        </div>
    )
}

export default Exercises