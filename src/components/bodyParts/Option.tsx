import React from 'react'
import { onOptionClick } from '../../store/slices/exersicesSlice'
import { useCustomDispatch } from '../../hooks'

const Option: React.FC<{ title: string, name: string, currentValue: string }> = ({ title, name, currentValue }) => {
    const dispatch = useCustomDispatch()
    function handleClick() {
        dispatch(onOptionClick({ title, name }))
    }

    return (
        <article onClick={handleClick} className={`body-part hvr-fade ${currentValue === title ? 'hvr-fade--active' : ''}`}>
            <h3>{title}</h3>
            <img className='body-part__img' src={`../../../src/assets/bodyparts/${title}.svg`} alt={title} />
        </article>
    )
}

export { Option }