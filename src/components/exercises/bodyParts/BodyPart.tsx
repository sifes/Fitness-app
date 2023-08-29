import React from 'react'
import { onBodyPartClick } from '../../../store/slices/exersicesSlice'
import { useCustomDispatch, useCustomSelector } from '../../../hooks'

const BodyPart: React.FC<{ title: string }> = ({ title }) => {
    const { selectedBodyPart } = useCustomSelector(state => state.exercisesReducer)

    const dispatch = useCustomDispatch()
    function handleClick() {
        dispatch(onBodyPartClick(title))
    }

    return (
        <article onClick={handleClick} className={`body-part hvr-fade ${selectedBodyPart === title ? 'hvr-fade--active' : ''}`}>
            <h3>{title}</h3>
            <img className='body-part__img' src={`../../../src/assets/bodyparts/${title}.svg`} alt={title} />
        </article>
    )
}

export { BodyPart }