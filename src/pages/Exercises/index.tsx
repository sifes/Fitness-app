import React from 'react'
import Categories from '../../components/exercises/categories/Categories'
import Search from '../../components/exercises/Search'

const Exercises: React.FC = () => {
    return (
        <div className='container'>
            <div className="exercises">
                <h2 className="exercises__title">Get Awesome Exersices!</h2>
                <Search />
                <Categories />
            </div>
        </div>
    )
}

export default Exercises