import React from 'react'
import { NavLink } from 'react-router-dom'
import { PATH } from '../utils/constants'
import { Body } from '../components/body/Body'
const Home: React.FC = () => {
    return (
        <div className='container'>
            <div className="home">
                <div className="home__new">
                    <span>new</span>
                    <p>High Intensity workout to burn calories</p>
                </div>
                <h1 className="home__title">Best <br />Exercises</h1>
                <p className="home__text">Did you know that you are strong?</p>
                <div className="home__actions">
                    <NavLink to={PATH.EXERCISES} className='home__link'>Get Fit</NavLink>
                </div>
            </div>
            <img className='home__bg' src="../../../src/assets/gym-bg.jpg" alt="" />
        </div>


    )
}

export default Home