import React from 'react'
import { useCustomSelector } from '../../../hooks/store'
import { useActions } from '../../../hooks/useActions'
import { BODY } from '../../../utils/constants'

interface IBack { right?: boolean | undefined, back?: boolean | undefined }
const Back: React.FC<IBack> = ({ right, back }) => {
    const { HoveredBody, selectedOptions } = useCustomSelector(state => state.optionsReducer)
    const { setIsHovered, setOptions } = useActions()
    let svgStyles = right ? 'right ' : ''
    selectedOptions.bodyPart === BODY.BACK ? svgStyles += 'selected ' : ''
    HoveredBody === BODY.BACK ? svgStyles += 'hovered ' : ''
    return (
        <g className={svgStyles} onMouseEnter={() => setIsHovered(BODY.BACK)} onMouseLeave={() => setIsHovered(null)} onClick={() => setOptions({ name: 'bodyPart', value: BODY.BACK })}>

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
        <g transform="matrix(1, 0, 0, 1, 189.333545, -1043.51735)">
            <title>back</title>
            <path d="M -2475.752 252.321 C -2477.071 256.773 -2504.842 278.785 -2513.548 278.293 C -2522.254 277.801 -2513.846 278.29 -2514.092 278.293 C -2514.092 278.293 -2494.653 285.576 -2493.701 285.338 C -2492.749 285.1 -2489.798 286.846 -2488.449 283.353 C -2487.1 279.86 -2475.12 251.76 -2475.752 252.321 Z" />
            <polygon style={{ fill: 'rgb(147, 51, 51)', fillOpacity: 0, strokeOpacity: 0, stroke: 'rgb(127, 49, 49)' }} points="-2531.888 332.079 -2533.12 385.658 -2523.139 426.745 -2519.524 426.71 -2521.725 358.065">
            </polygon>
            <path d="M -2531.464 338.661 L -2519.015 394.248 C -2519.015 394.248 -2518.114 428.852 -2521.76 427.259 C -2525.406 425.666 -2532.179 385.129 -2532.179 385.129 L -2531.464 338.661 Z" />
        </g>// i hate fucking svg with its "transform" x7
    )
}

const BackSide: React.FC = () => {
    return (
        <>
            <title>back</title>
            <path d="M -2145.054 372.539 C -2147.985 371.318 -2119.236 357.618 -2104.761 355.772 C -2090.286 353.926 -2080.909 316.35 -2080.572 313.467 C -2080.235 310.584 -2077.998 313.538 -2077.998 313.538 C -2078.234 312.988 -2076.919 501.201 -2075.81 512.757 C -2074.701 524.313 -2081.483 506.013 -2081.544 505.921 C -2081.544 505.921 -2102.127 457.076 -2107.454 454.637 C -2112.781 452.198 -2126.003 395.404 -2124.283 394.831 C -2122.563 394.258 -2146.706 372.999 -2145.054 372.539 Z" />
            <path d="M -2164.614 410.437 C -2164.614 410.437 -2156.924 419.143 -2157.179 422.321 C -2157.434 425.499 -2158.45 424.863 -2160.356 421.876 C -2162.262 418.889 -2166.585 417.745 -2166.648 417.618 C -2166.711 417.491 -2169.445 410.373 -2164.614 410.437 Z" />
            <path d="M -2167.029 421.903 C -2167.029 421.903 -2129.172 447.259 -2122.499 450.756 C -2115.826 454.253 -2138.557 458.319 -2138.557 458.319 C -2138.557 458.319 -2157.306 458.065 -2159.784 452.345 C -2162.262 446.625 -2173.893 420.568 -2167.029 421.903 Z" />
            <path d="M -2158.152 402.734 C -2158.152 402.734 -2162.746 405.871 -2162.943 408.315 C -2163.361 413.498 -2155.098 412.98 -2154.809 421.626 C -2154.52 430.272 -2115.663 455.106 -2115.23 448.428 C -2114.797 441.75 -2119.534 438.293 -2119.606 435.445 C -2119.898 423.925 -2125.894 403.278 -2125.894 403.278 C -2125.894 403.278 -2127.509 395.384 -2130.217 392.711 C -2131.834 391.115 -2134.54 390.188 -2136.557 390.213 C -2138.574 390.238 -2151.674 396.024 -2152.696 396.745 C -2153.718 397.466 -2157.98 402.605 -2158.172 402.797" />
            <path d="M -2075.452 525.654 C -2075.452 525.654 -2079.994 620.343 -2077.701 628.936 C -2075.408 637.529 -2083.18 632.24 -2083.248 631.934 C -2085.679 628.342 -2098.065 608.099 -2111.279 606.6 C -2124.493 605.101 -2108.218 592.392 -2107.792 590.644 C -2107.207 589.306 -2105.842 583.354 -2107.231 570.624 C -2108.62 557.894 -2077.636 505.118 -2075.452 525.654 Z" />
            <path d="M -2087.803 513.293 C -2087.803 513.293 -2114.732 563.262 -2111.74 569.695 C -2108.748 576.128 -2113.386 594.68 -2117.126 594.68 C -2120.866 594.68 -2123.813 592.137 -2123.813 592.137 C -2123.813 592.137 -2136.276 565.955 -2136.426 565.806 C -2136.576 565.657 -2159.955 480.483 -2160.864 472.76 C -2161.773 465.037 -2164.265 455.671 -2150.788 460.344 C -2137.311 465.017 -2115.704 453.35 -2115.202 453.013 C -2112.663 451.307 -2082.118 492.959 -2087.803 513.293 Z" />
            <polygon style={{ fill: 'rgb(216, 216, 216)', fillOpacity: 0, strokeOpacity: 0, stroke: 'rgb(121, 46, 46)' }} points="-2144.443 547.862 -2115.021 611.858 -2103.31 612.581 -2068.894 644.742 -2070.093 339.48 -2145.095 369.644 -2133.731 385.511 -2163.9 403.709 -2169.435 425.123">
            </polygon>
        </ >
    )
}

export { Back }