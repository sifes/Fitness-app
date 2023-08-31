import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetExerciseByIDQuery } from '../store/api'
import { NavLink } from 'react-router-dom'
import { PATH } from '../utils/constants'

interface IOneExercisePage { }

const OneExercisePage: React.FC<IOneExercisePage> = () => {
    const { id } = useParams()
    const { data, error, isLoading } = useGetExerciseByIDQuery(`${id}`)  // 

    if (isLoading || !data) return <div>Loading...</div>
    if (error) return <div>Error occured</div>
    return (
        <div className='container'>
            <NavLink to={PATH.EXERCISES} className='one-exercise__link'>Back</NavLink>
            <div className='one-exercise__card'>
                <div className="one-exercise__desc">
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
                <div className="one-exercise__image">
                    <img src={data.gifUrl} alt={data.bodyPart} />
                </div>
            </div>
        </div>

    )
}

export { OneExercisePage }