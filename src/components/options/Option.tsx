import React from 'react'
import { useActions } from '../../hooks/useActions'

const Option: React.FC<{ title: string, name: string, currentValue: string }> = ({ title, name, currentValue }) => {
    const { onOptionClick } = useActions()

    function handleClick() {
        onOptionClick({ title, name })
    }
    return (
        <article onClick={handleClick} className={`body-part hvr-fade ${currentValue === title ? 'hvr-fade--active' : ''}`}>
            <h3>{title}</h3>
            <img className='body-part__img' src={`../../../src/assets/bodyparts/${title}.svg`} alt={title} />
        </article>
    )
}

export { Option }