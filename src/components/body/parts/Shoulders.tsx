import React from 'react'
import { useCustomSelector } from '../../../hooks/store'
import { useActions } from '../../../hooks/useActions'
import { BODY } from '../../../utils/constants'

interface IShoulders { right?: boolean | undefined, back?: boolean | undefined }
const Shoulders: React.FC<IShoulders> = ({ right, back }) => {
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
    const { HoveredBody } = useCustomSelector(state => state.optionsReducer)
    const { setIsHovered } = useActions()
    return (
        <g className={HoveredBody === BODY.SHOULDERS ? right ? 'right hovered' : 'hovered' : ''} onMouseEnter={() => setIsHovered(BODY.SHOULDERS)} onMouseLeave={() => setIsHovered(null)} transform="matrix(0.995057, 0, 0, 0.994516, -980.314216, -1223.291025)">
            <title>shoulder</title>
            <path d="M -1403.716 490.484 C -1407.883 509.141 -1393.738 534.213 -1393.738 534.213 C -1393.738 534.213 -1369.894 522.436 -1371.267 499.947 C -1372.64 477.458 -1333.054 474.124 -1330.665 474.03 C -1329.519 474.483 -1357.387 460.947 -1357.221 460.781 C -1357.153 460.849 -1387.853 456.092 -1403.678 490.522" />
            <polygon style={{ strokeOpacity: 0, fill: 'rgb(216, 216, 216)', fillOpacity: 0, stroke: 'rgb(127, 49, 49)' }} points="-1405.329 490.459 -1393.451 534.875 -1381.96 526.659 -1369.989 511.61 -1368.299 495.388 -1365.312 486.627 -1348.017 475.966 -1323.863 472.551 -1326.464 469.043 -1355.878 459.874 -1370.478 460.303 -1385.696 466.859 -1399.975 480.257">
            </polygon>
        </g>
    )
}

const BackSide: React.FC<{ right: boolean | undefined }> = ({ right }) => {
    const { HoveredBody } = useCustomSelector(state => state.optionsReducer)
    const { setIsHovered } = useActions()
    return (
        <g className={HoveredBody === BODY.SHOULDERS ? right ? 'right hovered' : 'hovered' : ''} onMouseEnter={() => setIsHovered(BODY.SHOULDERS)} onMouseLeave={() => setIsHovered(null)}>
            <title>shoulder</title>
            <path d="M -2176.555 378.767 C -2176.555 378.767 -2149.668 368.302 -2145.687 370.188" />
            <polygon style={{ strokeOpacity: 0, fillOpacity: 0, fill: 'rgb(144, 144, 144)', stroke: 'rgb(136, 58, 58)' }} points="-2203.307 459.743 -2170.519 425.016 -2164.637 403.045 -2135.692 384.784 -2146.645 369.483 -2184.186 379.69 -2196.469 394.914 -2206.33 413.944">
            </polygon>
            <path d="M -2202.49 456.648 C -2203.297 457.38 -2170.954 429.806 -2171.09 419.09 C -2171.226 408.374 -2159.966 397.633 -2148.55 390.804 C -2139.641 385.474 -2153.472 386.961 -2163.451 379.784 C -2166.564 377.545 -2174.374 377.758 -2177.15 378.879 C -2178.828 379.043 -2216.531 395.521 -2202.49 456.648 Z" />
        </g>
    )
}

export { Shoulders }