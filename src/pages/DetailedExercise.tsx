import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetExerciseByIDQuery } from '../store/apiAll'
import { NavLink } from 'react-router-dom'
import { PATH } from '../utils/constants'
import { useGetExerciseByNameQuery } from '../store/apiName'

interface IDetailedExercise { }

const DetailedExercise: React.FC<IDetailedExercise> = () => {
    const { id } = useParams()
    const { data, error, isLoading } = useGetExerciseByIDQuery(`${id}`)

    const { data: data2 } = useGetExerciseByNameQuery(`push up`) // THERE IS NO BENCH PRESS WTF
    console.log(data2);
    // so my idea was to fetch data from other api to get extra info about exercise
    // and use this info in detailed exercise, but it actually cant be done
    // because names are not the same and in that other api no such "additional info", so there is no profit.
    // but idea was actually kinda cool (i didn`t know about that api should have reducer path, and had been getting error with middleware, so i learnt something new) 
    if (isLoading || !data) return <div>Loading...</div>
    if (error) return <div>Error occured</div>

    return (
        <div className='container'>
            <div className='detailed-exercise'></div>
            <NavLink to={PATH.EXERCISES} className='detailed-exercise__link'>Back</NavLink>
            <div className='detailed-exercise__info exercise-detailed'>
                <div className="exercise-detailed__desc">
                    <h4>{data.name}</h4>
                    <ul>
                        <li>
                            <div>body part: </div><span>{data.bodyPart}</span>
                        </li>
                        <li>
                            <div>equipment: </div><span>{data.equipment}</span>
                        </li>
                        <li>
                            <div>target: </div><span>{data.target}</span>
                        </li>
                    </ul>
                </div>
                <div className="exercise-detailed__image">
                    <img src={data.gifUrl} alt={data.bodyPart} />
                </div>
            </div>
        </div>

    )
}

export { DetailedExercise }