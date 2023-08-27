import React from 'react'

const Category: React.FC<{ title: string }> = ({ title }) => {
    return (
        <article className='category hvr-fade'>
            <h3>{title}</h3>
            <img className='category__img' src={`../../../src/assets/categories/${title}.svg`} alt={title} />
        </article>
    )
}

export default Category