import React from 'react'
import { NavLink } from 'react-router-dom'
import { PATH } from '../../utils/constants'
import Logo from '../logo/Logo'

const Header: React.FC = () => {
    return (
        <div className='container'>
            <div className='header'>
                <Logo />
                <ul className="header__nav nav">
                    <li><NavLink to={PATH.EXERCISES} className="nav__link hvr-underline-from-left">EXERCISES</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Header