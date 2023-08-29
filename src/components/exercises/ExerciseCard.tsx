import React from 'react'
import { IExercise } from '../../types';

const ExerciseCard: React.FC<IExercise> = ({ bodyPart, equipment, gifUrl, name, target }) => {
    return (
        <div className='exercise hvr-fade'>
            <h4>{name}</h4>
            <div>
                <img src={gifUrl} alt={bodyPart} />
            </div>
            <p>body part - <span>{bodyPart}</span></p>
            <p>equipment - <span>{equipment}</span></p>
            <p>target - <span>{target}</span></p>
        </div>
    )
}

export default ExerciseCard  