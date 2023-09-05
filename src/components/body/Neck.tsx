import React from 'react'
import { useActions } from '../../hooks/useActions'
import { useCustomSelector } from '../../hooks/store'
import { BODY } from '../../utils/constants'

interface INeck { right?: boolean | undefined, back?: boolean | undefined }
const Neck: React.FC<INeck> = ({ right, back }) => {
    return (
        <>
            {back ?
                <BackSide right={right}
                />
                :
                <FrontSide right={right}
                />
            }
        </>
    )
}
const FrontSide: React.FC<{ right: boolean | undefined }> = ({ right }) => {
    const { neckIsHovered } = useCustomSelector(state => state.bodyReducer)
    const { setIsHovered } = useActions()
    return (
        <g className={neckIsHovered ? right ? 'right hovered' : 'hovered' : ''} onMouseEnter={() => setIsHovered(BODY.NECK)} onMouseLeave={() => setIsHovered(BODY.NECK)} transform="matrix(1, 0, 0, 1, 189.333545, -1043.51735)">
            <title>neck</title>
            <path d="M -2457.358 237.777 C -2456.809 237.694 -2453.759 239.184 -2451.827 241.213 C -2451.827 241.213 -2449.747 242.357 -2452.659 251.559 C -2455.571 260.761 -2457.41 237.777 -2457.358 237.777 Z" />
            <polygon style={{ fill: 'rgb(147, 51, 51)', fillOpacity: 0, strokeOpacity: 0, stroke: 'rgb(127, 49, 49)' }} points="-2488.42 286.189 -2485.769 289.922 -2446.434 286.388 -2447.25 224.219 -2475.54 230.358 -2476.135 239.639 -2474.411 252.078">
            </polygon>
            <path d="M -2472.182 230.699 C -2472.182 230.699 -2457.613 283.443 -2457.72 283.337 C -2457.827 283.231 -2457.082 287.591 -2460.378 282.912 C -2463.674 278.233 -2474.096 250.478 -2474.096 250.478 C -2474.096 250.478 -2475.904 227.296 -2472.182 230.699 Z" />
            <path d="M -2475.728 257.478 C -2475.728 257.478 -2477.032 283.046 -2477.116 283.702 C -2477.2 284.358 -2481.352 286.866 -2481.455 286.92 C -2481.558 286.974 -2484.8 287.188 -2484.695 286.977 C -2485.486 286.61 -2486.177 285.082 -2486.05 284.681 C -2486.162 284.784 -2476.274 255.99 -2475.728 257.478 Z" />
            <path d="M -2474.321 257.572 C -2474.321 257.572 -2474.585 277.161 -2474.527 278.03 C -2474.469 278.899 -2463.56 287.334 -2463.56 287.334 C -2463.655 287.465 -2460.364 289.635 -2462.345 284.503 C -2464.326 279.371 -2474.803 255.307 -2474.321 257.572 Z" />
        </g>
    )
}

const BackSide: React.FC<{ right: boolean | undefined }> = ({ right }) => {
    const { neckIsHovered } = useCustomSelector(state => state.bodyReducer)
    const { setIsHovered } = useActions()
    return (
        <g className={neckIsHovered ? right ? 'right hovered' : 'hovered' : ''} onMouseEnter={() => setIsHovered(BODY.NECK)} onMouseLeave={() => setIsHovered(BODY.NECK)}>
            <title>neck</title>
            <path d="M -2090.533 318.672 C -2090.533 318.672 -2101.027 351.093 -2101.568 351.228 C -2102.109 351.363 -2090.533 337.757 -2089.315 332.884 C -2088.097 328.011 -2090.398 318.131 -2090.533 318.672 Z" />
            <polygon style={{ strokeOpacity: 0, fillOpacity: 0, fill: 'rgb(144, 144, 144)', stroke: 'rgb(136, 58, 58)' }} points="-2103.085 351.868 -2069.617 337.93 -2069.797 308.898 -2104.85 318.011">
            </polygon>
            <path d="M -2103.047 318.736 C -2103.047 318.736 -2094.855 331.541 -2101.138 349.516" />
        </g>
    )
}

export { Neck }