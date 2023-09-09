import React from 'react'
import { useActions } from '../../hooks/useActions'

const Option: React.FC<{ title: string, name: string, currentValue: string }> = ({ title, name, currentValue }) => {
    const { setOptions } = useActions()

    function handleClick() {
        setOptions({ value: title, name })
    }
    return (
        <article onClick={handleClick} className={`option hvr-fade ${currentValue === title ? 'hvr-fade--active' : ''}`}>
            <h3>{title}</h3>
            <img className='option__img' src={`../../../src/assets/bodyparts/${title}.svg`} alt={title} />
        </article>
    )
}

export { Option }