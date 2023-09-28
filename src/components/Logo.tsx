import React from 'react'
import { NavLink } from 'react-router-dom'
import { PATH } from '../utils/constants'

const Logo: React.FC = () => {
    return (
        <NavLink to={PATH.INDEX} className="header__logo hvr-float-shadow">
            Workout
        </NavLink>
    )
}

export default Logo