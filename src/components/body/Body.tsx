import React from 'react'
import { UpperArms } from './parts/UpperArms'
import { LowerArms } from './parts/LowerArms'
import { Shoulders } from './parts/Shoulders'
import { Neck } from './parts/Neck'
import { Chest } from './parts/Chest'
import { Abs } from './parts/Abs'
import { Back } from './parts/Back'
import { UpperLegs } from './parts/UpperLegs'
import { LowerLegs } from './parts/LowerLegs'


interface IBody { }

const Body: React.FC<IBody> = () => {
    return (
        <div className='body-wrapper' >
            <div className='body-front'>
                <div className='body__content'>
                    <svg viewBox="-1684.735 -135.726 414.973 826.167" >
                        <g transform="matrix(1, 0, 0, 1, 780, 677)">
                            <title>front-left</title>
                            <UpperArms />
                            <LowerArms />
                            <Shoulders />
                            <Neck />
                            <Chest />
                            <Abs />
                            <Back />
                            <UpperLegs />
                            <LowerLegs />
                        </g>
                        <g transform="matrix(-1, 0, 0, 1, -3735, 677)" >
                            <title>front-right</title>
                            <UpperArms right />
                            <LowerArms right />
                            <Shoulders right />
                            <Neck right />
                            <Chest right />
                            <Abs right />
                            <Back right />
                            <UpperLegs right />
                            <LowerLegs right />
                        </g>
                    </svg>
                </div>
            </div>
            <div className='body-back'>
                <div className='body__content'>
                    <svg viewBox="-1250.353 -150.496 414.973 840.937">
                        <g transform="matrix(1, 0, 0, 1, 1030, -462)">
                            <title>back-left</title>
                            <UpperArms back />
                            <LowerArms back />
                            <Shoulders back />
                            <Neck back />
                            <Abs back />
                            <Back back />
                            <UpperLegs back />
                            <LowerLegs back />
                        </g>
                        <g transform="matrix(-1, 0, 0, 1, -3109, -462)">
                            <title>back-right</title>
                            <UpperArms back right />
                            <LowerArms back right />
                            <Shoulders back right />
                            <Neck back right />
                            <Abs back right />
                            <Back back right />
                            <UpperLegs back right />
                            <LowerLegs back right />
                        </g>
                    </svg>
                </div>
            </div>
        </div>

    )
}

export { Body }