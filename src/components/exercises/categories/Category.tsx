import React from 'react'
import { onBodyPartClick } from '../../../store/slices/exersicesSlice'
import { useCustomDispatch } from '../../../hooks'

const Category: React.FC<{ title: string }> = ({ title }) => {

    const dispatch = useCustomDispatch()
    function handleClick() {
        dispatch(onBodyPartClick(title))
    }

    return (
        <article onClick={handleClick} className='category hvr-fade'>
            <h3>{title}</h3>
            <img className='category__img' src={`../../../src/assets/categories/${title}.svg`} alt={title} />
        </article>
    )
}

export default Category