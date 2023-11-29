import React from 'react'
import { useCustomSelector } from '../../../hooks/store'
import { useActions } from '../../../hooks/useActions'
import { BODY } from '../../../utils/constants'

interface IUpperArms { right?: boolean | undefined, back?: boolean | undefined }
const UpperArms: React.FC<IUpperArms> = ({ right, back }) => {
    const { HoveredBody, selectedOptions } = useCustomSelector(state => state.optionsReducer)
    const { setIsHovered, setOptions } = useActions()
    let svgStyles = right ? 'right ' : ''
    selectedOptions.bodyPart === BODY.UPPER_ARMS ? svgStyles += 'selected ' : ''
    HoveredBody === BODY.UPPER_ARMS ? svgStyles += 'hovered ' : ''
    return (
        <g className={svgStyles} onMouseEnter={() => setIsHovered(BODY.UPPER_ARMS)} onMouseLeave={() => setIsHovered(null)} onClick={() => setOptions({ name: 'bodyPart', value: BODY.UPPER_ARMS })}>
            {back ?
                <BackSide />
                :
                <FrontSide />
            }
        </g>
    )
}
const FrontSide: React.FC = () => {
    return (
        <g transform="matrix(1, 0, 0, 1, -1306, -1133)">
            <title>upper arms</title>
            <path d="M -1074.511 535.697 C -1074.53 535.685 -1047.523 487.601 -1041.004 472.73" />
            <path d="M -1079.864 537.923 C -1084.705 542.777 -1068.687 450.369 -1054.397 439.302 C -1054.238 439.157 -1068.99 446.067 -1082.206 469.287" />
            <path d="M -1078.057 457.866 C -1078.057 458.278 -1065.059 443.267 -1065.059 442.726 C -1064.737 442.407 -1080.242 410.073 -1072.082 396.485" />
            <polygon style={{ strokeWidth: '1.00524px', fill: 'rgb(147, 51, 51)', fillOpacity: 0, strokeOpacity: 0, stroke: 'rgb(127, 49, 49)' }} points="-1074.624 399.327 -1073.258 411.851 -1067.5 432.8 -1062.385 442.323 -1050.058 433.573 -1039.032 420.532 -1039.596 464.515 -1041.147 485.631 -1053.198 553.017 -1057.833 560.512 -1061.859 547.081 -1067.796 535.697 -1074.201 534.639 -1079.924 536.72 -1086.264 507.744 -1087.399 482.346 -1082.206 454.692 -1080.403 412.824">
            </polygon>
            <path d="M -1041.096 477.481 C -1041.22 477.481 -1064.979 526.966 -1067.454 531.048 C -1069.929 535.13 -1060.6 543.346 -1058.9 556.38 C -1058.582 557.519 -1053.614 550.1 -1053.565 540.301 C -1053.54 535.286 -1053.062 528.995 -1052.661 526.767 C -1052.26 524.539 -1039.956 480.545 -1040.935 473.728 C -1041.914 466.911 -1037.865 428.145 -1041.158 424.431 C -1040.395 423.21 -1053.133 441.383 -1054.92 444.613 C -1054.92 444.613 -1079.093 502.635 -1075.127 535.555" />
            <path d="M -1072.124 396.593 C -1072.124 396.593 -1079.574 410.52 -1079.455 414.263 C -1079.336 418.006 -1078.171 457.74 -1078.171 457.74 C -1077.581 459.96 -1094.046 490.943 -1080.621 537.49" />
        </g> // i hate fucking svg with its "transform"
    )
}

const BackSide: React.FC = () => {

    return (
        <>
            <title>upper arms</title>
            <path d="M -2193.897 524.614 C -2195.43 529.075 -2195.722 567.001 -2178.043 528.82 C -2160.364 490.639 -2164.701 468.19 -2164.863 468.19 C -2165.025 468.19 -2165.024 449.262 -2165.024 449.262 C -2165.024 449.262 -2168.745 433.363 -2172.304 434.495 C -2175.863 435.627 -2188.26 463.939 -2188.26 463.939 L -2193.897 524.614 Z" />
            <path d="M -2208 514.688 C -2208.953 519.97 -2206.867 553.757 -2199.445 528.886 C -2192.023 504.015 -2198.188 475.748 -2194.468 471.219 C -2190.748 466.69 -2188.385 452.098 -2183.37 446.274 C -2178.355 440.45 -2195.115 452.938 -2195.115 452.938 L -2203.288 464.748 L -2208 514.688 Z" />
            <path d="M -2174.196 537.006 C -2174.196 537.006 -2160.894 485.462 -2163.322 478.988" />
            <polygon style={{ fillOpacity: 0, fill: 'rgb(144, 144, 144)', stroke: 'rgb(136, 58, 58)', strokeOpacity: 0 }} points="-2195.486 550.572 -2171.68 538.423 -2160.303 482.587 -2169.938 426.864 -2205.004 463.499 -2210.62 526.924">
            </polygon>
        </>
    )
}

export { UpperArms }