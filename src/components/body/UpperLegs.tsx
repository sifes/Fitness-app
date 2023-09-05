import React from 'react'
import { useActions } from '../../hooks/useActions'
import { useCustomSelector } from '../../hooks/store'
import { BODY } from '../../utils/constants'

interface IUpperLegs { }

interface IUpperLegs { right?: boolean | undefined, back?: boolean | undefined }
const UpperLegs: React.FC<IUpperLegs> = ({ right, back }) => {
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
    const { upperLegsIsHovered } = useCustomSelector(state => state.bodyReducer)
    const { setIsHovered } = useActions()
    return (
        <g className={upperLegsIsHovered ? right ? 'right hovered' : 'hovered' : ''} onMouseEnter={() => setIsHovered(BODY.UPPER_LEGS)} onMouseLeave={() => setIsHovered(BODY.UPPER_LEGS)} transform="matrix(1, 0, 0, 1, 189.333545, -1043.51735)">
            <title>upper legs</title>
            <path d="M -2488.068 608.55 L -2488.038 608.595 C -2488.038 608.595 -2474.639 589.337 -2477.228 578.464 C -2477.228 578.45 -2484.035 569.338 -2484.035 569.635 C -2483.727 569.125 -2485.156 573.712 -2485.251 576.594 C -2485.346 579.476 -2491.311 593.146 -2491.311 593.146 C -2491.311 593.146 -2492.975 601.208 -2488.068 608.55 Z" />
            <path d="M -2508.323 541.398 L -2500.573 549.613 C -2500.472 549.546 -2499.033 552.795 -2499.134 552.862 C -2499.134 552.862 -2500.004 569.132 -2500.391 568.916 C -2500.778 568.7 -2509.51 540.269 -2508.323 541.398 Z" />
            <path d="M -2498.054 579.002 C -2498.054 579.002 -2496.322 591.437 -2493.701 589.625 C -2491.08 587.813 -2487.995 579.889 -2487.995 579.889 L -2487.204 565.567 C -2487.204 565.567 -2495.867 554.405 -2496.454 554.875 C -2496.689 554.992 -2498.054 579.002 -2498.054 579.002 Z" />
            <path d="M -2468.325 737.546 C -2472.165 699.958 -2485.612 663.665 -2485.263 664.014 C -2484.914 664.363 -2497.448 623.877 -2499.129 622.868 C -2500.81 621.859 -2515.035 553.997 -2515.035 553.997 C -2515.035 553.997 -2514 549.684 -2517.247 539.284 C -2520.494 528.884 -2512.213 538.745 -2512.213 538.745 C -2512.213 538.745 -2480.968 642.788 -2479.323 641.473 C -2477.678 640.158 -2463.536 709.035 -2465.674 711.008 C -2467.812 712.981 -2467.154 744.269 -2471.101 752.656 C -2475.048 761.043 -2473.403 784.35 -2473.403 784.35 C -2473.403 784.35 -2481.119 801.599 -2483.121 803.409 C -2485.123 805.219 -2483.121 796.833 -2483.121 796.833 L -2481.882 792.815 L -2484.36 789.289 C -2484.36 789.289 -2478.26 768.232 -2473.495 764.419" />
            <path d="M -2462.679 709.891 C -2462.679 709.891 -2454.138 658.384 -2453.141 659.523 C -2452.144 660.662 -2449.725 623.906 -2453.711 619.493 C -2457.697 615.08 -2464.53 611.378 -2464.53 611.378 C -2464.53 611.378 -2464.388 624.618 -2464.245 624.618 C -2464.102 624.618 -2459.69 657.218 -2461.683 661.631 C -2463.676 666.044 -2470.082 684.267 -2462.679 709.891 Z" />
            <path d="M -2487.84 695.828 C -2488.663 694.456 -2486.925 673.685 -2485.769 671.433 C -2484.613 669.181 -2470.765 736.212 -2470.544 745.171 C -2470.323 754.13 -2494.934 788.226 -2495.814 752.698 C -2496.694 717.17 -2487.624 709.732 -2487.84 695.828 Z" />
            <polygon style={{ fill: 'rgb(216, 216, 216)', fillOpacity: '0.03', strokeOpacity: 0, stroke: 'rgb(127, 49, 49)' }} points="-2527.621 756.023 -2485.507 776.648 -2484.498 804.898 -2470.436 797.687 -2471.348 758.969 -2461.295 713.01 -2451.241 660.126 -2447.63 597.42 -2525.123 524.353 -2534.325 551.641 -2542.058 616.09 -2542.31 664.223 -2537.028 721.913">
            </polygon>
            <path d="M -2526.251 529.945 C -2526.251 529.945 -2522.611 520.304 -2520.84 531.421 C -2519.069 542.538 -2519.462 541.66 -2519.266 541.365 C -2519.07 541.07 -2517.593 550.433 -2519.561 554.861 C -2521.529 559.289 -2523.033 569.361 -2523.033 569.361 L -2539.827 625.488 C -2539.827 625.488 -2540.122 601.188 -2538.843 600.303 C -2537.564 599.418 -2532.055 561.75 -2531.957 561.75 C -2531.859 561.75 -2532.547 553.486 -2532.547 553.486 L -2526.251 529.945 Z" />
            <path d="M -2516.53 563.202 C -2516.53 563.202 -2528.185 601.344 -2527.731 605.279 C -2527.277 609.214 -2531.818 639.792 -2531.818 639.792 C -2531.818 639.792 -2533.634 687.933 -2521.373 712.607 C -2509.112 737.281 -2510.323 740.005 -2510.172 740.156 C -2510.021 740.307 -2504.723 748.784 -2500.787 737.128 C -2496.851 725.472 -2493.701 709.891 -2493.701 709.891 L -2488.526 663.259 C -2493.518 659.265 -2519.498 560.827 -2516.53 563.202 Z" />
            <path d="M -2530.895 607.431 C -2530.895 607.431 -2539.856 631.673 -2539.856 631.467 C -2539.856 631.261 -2541.938 663.152 -2540.288 668.517 C -2538.638 673.882 -2538.032 692.74 -2536.794 710.793 C -2535.556 728.846 -2519.077 759.93 -2519.077 759.93 C -2519.077 759.93 -2514.452 763.541 -2515.175 755.288 C -2515.898 747.035 -2518.002 727.331 -2518.002 727.331 L -2530.2 696.319 C -2530.2 696.319 -2535.091 678.633 -2535.085 662.333 C -2535.079 646.033 -2535.267 633.338 -2534.982 633.338 L -2530.895 607.431 Z" />
        </g>
    )
}

const BackSide: React.FC<{ right: boolean | undefined }> = ({ right }) => {
    const { upperLegsIsHovered } = useCustomSelector(state => state.bodyReducer)
    const { setIsHovered } = useActions()
    return (
        <g className={upperLegsIsHovered ? right ? 'right hovered' : 'hovered' : ''} onMouseEnter={() => setIsHovered(BODY.UPPER_LEGS)} onMouseLeave={() => setIsHovered(BODY.UPPER_LEGS)}>
            <title>upper legs</title>
            <path d="M -2150.931 613.118 C -2150.931 613.118 -2159.437 702.55 -2162.196 703.01 C -2164.955 703.47 -2167.714 760.228 -2164.035 774.022 C -2160.356 787.816 -2148.862 844.602 -2148.862 844.602 C -2148.862 844.602 -2155.299 872.909 -2153.92 875.208 C -2152.541 877.507 -2153.823 900.105 -2153.565 899.847 C -2153.307 899.589 -2123.238 844.547 -2127.421 836.459 C -2131.604 828.371 -2120.597 741.025 -2119.891 741.142 C -2119.185 741.259 -2121.058 729.174 -2129.374 734.379 C -2137.69 739.584 -2143.58 752.211 -2143.58 752.211 L -2148.757 842.883" />
            <path d="M -2151.279 828.932 L -2149.714 754.404 C -2149.714 754.404 -2160.234 711.915 -2158.672 705.326 C -2157.11 698.737 -2162.683 703.922 -2162.683 703.922" />
            <path d="M -2148.708 643.166 C -2148.708 643.166 -2145.182 620.8 -2136.63 615.496 C -2129.742 611.224 -2114.161 615.867 -2112.491 616.248 C -2110.821 616.629 -2108.763 616.976 -2108.759 620.509 C -2108.755 624.042 -2148.205 645.533 -2148.35 645.432 L -2148.708 643.166 Z" />
            <path d="M -2104.228 621.94 C -2104.228 621.94 -2109.976 627.847 -2111.114 628.902 C -2112.252 629.957 -2129.243 637.861 -2137.338 642.584 C -2141.671 645.112 -2148.47 652.587 -2148.47 653.183 C -2148.47 653.779 -2153.054 660.011 -2150.788 681.118 C -2148.522 702.225 -2142.429 713.569 -2141.791 714.464 C -2141.153 715.359 -2128.074 727.438 -2125.931 728.297 C -2123.788 729.156 -2114.364 730.901 -2108.521 730.563 C -2100.503 730.099 -2087.544 725.979 -2085.08 724.72 C -2082.616 723.461 -2075.841 714.759 -2075.225 711.335 C -2074.609 707.911 -2075.281 650.337 -2076.385 650.337 C -2076.385 650.337 -2093.869 616.709 -2104.228 621.94 Z" />
            <path d="M -2115.541 735.629 C -2115.541 735.629 -2128.781 833.609 -2125.114 837.276 C -2121.447 840.943 -2127.576 853.729 -2127.576 853.729 C -2127.576 853.729 -2127.017 882.2 -2117.266 899.32 C -2107.515 916.44 -2114.934 894.105 -2114.757 893.629 C -2114.757 893.629 -2117.363 841.669 -2109.777 840.599 C -2102.191 839.529 -2101.682 808.213 -2101.682 808.213 C -2101.682 808.213 -2097.07 766.651 -2103.582 757.792 C -2110.094 748.933 -2111.254 735.875 -2111.281 735.932 C -2111.281 735.932 -2113.381 733.232 -2115.541 735.629 Z" />
            <polygon style={{ strokeOpacity: 0, fillOpacity: 0, fill: 'rgb(144, 144, 144)', stroke: 'rgb(136, 58, 58)' }} points="-2154.818 902.446 -2137.324 876.834 -2104.109 917.944 -2093.457 859.259 -2084.12 796.625 -2075.169 742.845 -2074.699 643.103 -2105.18 614.105 -2153.66 612.534 -2165.552 761.453 -2150.482 844.594">
            </polygon>
            <path d="M -2106.583 911.497 C -2104.072 909.113 -2095.701 872.05 -2097.49 862.957 C -2099.279 853.864 -2089.738 820.94 -2092.571 817.363 C -2095.404 813.786 -2096.595 787.662 -2096.595 787.662 L -2099.875 816.878 C -2099.875 816.878 -2102.26 841.474 -2107.627 841.921 C -2112.994 842.368 -2113.496 898.364 -2110.202 900.281 C -2110.202 900.281 -2108.758 913.562 -2106.583 911.497 Z" />
            <path d="M -2099.27 760.991 L -2106.887 741.66 C -2106.887 741.66 -2111.209 733.929 -2103.249 734.042 C -2095.289 734.155 -2085.283 729.153 -2085.283 729.153 C -2085.283 729.153 -2077.664 730.29 -2078.119 736.317 C -2078.574 742.344 -2077.096 745.982 -2077.21 745.982 C -2077.324 745.982 -2082.099 764.062 -2082.099 763.948 C -2082.099 763.834 -2086.42 801.373 -2086.42 801.373 L -2091.309 811.493 C -2091.309 811.493 -2094.039 787.5 -2094.039 787.387 C -2094.039 787.274 -2094.834 774.662 -2094.834 774.549 C -2094.834 774.436 -2098.701 760.892 -2099.27 760.991 Z" />
        </g >
    )
}

export { UpperLegs }






