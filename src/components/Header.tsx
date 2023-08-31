import React from 'react'
import { NavLink } from 'react-router-dom'
import { PATH } from '../utils/constants'
import Logo from './Logo'

const Header: React.FC = () => {
    return (
        <div className='container'>
            <div className='header'>
                <Logo />
                <ul className="header__nav nav">
                    <li className="nav__link hvr-underline-from-left"><NavLink to={PATH.EXERCISES}>EXERCISES</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Header