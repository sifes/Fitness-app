import React from 'react'
import Search from '../components/Search'
import BodyParts from '../components/bodyParts/BodyParts'
import { Exercises } from '../components/exercises/Exercises'

const ExercisesPage: React.FC = () => {
    return (
        <div className='container'>
            <div className="exercises">
                <h2 className="exercises__title">S Awesome Exersices!</h2>
                <Search />
                <BodyParts />
                <Exercises />
            </div>
        </div>
    )
}

export default ExercisesPage