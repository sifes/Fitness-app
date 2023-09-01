import React from 'react'
import { IExercise } from '../../types';
import { NavLink } from 'react-router-dom';

const ExerciseCard: React.FC<IExercise> = ({ bodyPart, equipment, id, gifUrl, name, target }) => {
    return (
        <NavLink to={id} className='cards-exerscises__card exercise-card hvr-fade'>
            <h4>{name}</h4>
            <div>
                <img src={gifUrl} alt={bodyPart} />
            </div>
            <p>body part - <span>{bodyPart}</span></p>
            <p>equipment - <span>{equipment}</span></p>
            <p>target - <span>{target}</span></p>
        </NavLink>
    )
}

export default ExerciseCard  