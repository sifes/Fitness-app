import React from 'react'

const Header: React.FC = () => {
    return (
        <div className='container header'>
            <div className="header__logo">
                Workout
            </div>
            <ul className="header__nav nav">
                <li className="nav__link"><a href="#!">EXERCISES</a></li>
                <li className="nav__link"><a href="#!">TRAINERS</a></li>
                <li className="nav__link"><a href="#!">PRICING</a></li>
                <li className="nav__link"><a href="#!">LOGIN</a></li>
            </ul>
        </div>
    )
}

export default Header