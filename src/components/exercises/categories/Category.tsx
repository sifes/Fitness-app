import React from 'react'

const Category: React.FC<{ title: string }> = ({ title }) => {
    return (
        <article className='category hvr-fade'>
            <h1>{title}</h1>
            <img className='category__img' src={`../../../src/assets/categories/all.svg`} alt={title} />
        </article>
    )
}

export default Category