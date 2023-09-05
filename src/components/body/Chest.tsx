import React from 'react'
import { useActions } from '../../hooks/useActions'
import { useCustomSelector } from '../../hooks/store'
import { BODY } from '../../utils/constants'

interface IChest { right?: boolean | undefined }
const Chest: React.FC<IChest> = ({ right }) => {
    return (
        <>
            <FrontSide right={right} />
        </>
    )
}
const FrontSide: React.FC<{ right: boolean | undefined }> = ({ right }) => {
    const { chestIsHovered } = useCustomSelector(state => state.bodyReducer)
    const { setIsHovered } = useActions()
    return (
        <g className={chestIsHovered ? right ? 'right hovered' : 'hovered' : ''} onMouseEnter={() => setIsHovered(BODY.CHEST)} onMouseLeave={() => setIsHovered(BODY.CHEST)} transform="matrix(1, 0, 0, 1, 189.333545, -1043.51735)">
            <title>chest</title>
            <path d="M -2532.134 327.44 C -2531.34 325.681 -2535.056 298.884 -2503.907 295.224 C -2472.758 291.564 -2464.178 293.637 -2464.033 293.784 C -2463.888 293.931 -2456.692 293.208 -2451.942 320.702 C -2447.192 348.196 -2454.245 370.076 -2454.245 370.076 C -2454.245 370.076 -2455.931 382.414 -2482.706 380.831 C -2509.481 379.248 -2514.662 368.164 -2514.662 368.164 C -2518.546 364.224 -2533.086 329.549 -2532.134 327.44 Z" />
            <polygon style={{ fill: 'rgb(147, 51, 51)', fillOpacity: 0, strokeOpacity: 0, stroke: 'rgb(127, 49, 49)' }} points="-2510.829 294.702 -2484.661 290.932 -2448.653 287.677 -2446.121 335.895 -2446.39 376.153 -2451.411 373.718 -2466.581 377.938 -2489.16 380.28 -2514.414 367.978 -2530.299 313.392 -2527.339 304.909">
            </polygon>
        </g>
    )
}

export { Chest }