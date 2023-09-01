import React from 'react'
import Search from '../components/Search'
import { Exercises } from '../components/exercises/Exercises'
import { Options } from '../components/bodyParts/Options'

const ExercisesPage: React.FC = () => {
    return (
        <div className='container'>
            <div className="exercises">
                <h2 className="exercises__title">Search Awesome Exersices!</h2>
                <Search />
                <Options />
                <Exercises />
            </div>
        </div>
    )
}

export default ExercisesPage