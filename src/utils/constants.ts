import { DataItem } from "../types";

// constants, ENUMS
export enum PATH {
    INDEX = '/',
    EXERCISES = '/exercises',
}
export enum BODY {
    LOWER_LEGS = 'LOWERLEGS',
    UPPER_LEGS = 'UPPERLEGS',
    CHEST = 'CHEST',
    NECK = 'NECK',
    BACK = 'BACK',
    ABS = 'ABS',
    SHOULDERS = 'SHOULDERS',
    LOWER_ARMS = 'LOWER_ARMS',
    UPPER_ARMS = 'UPPER_ARMS',
}
export const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            },
        },
    ],
};
export const OptionsData: DataItem[] = [
    {
        name: 'bodyPart',
        data: ['back', 'cardio', 'chest', 'lower arms', 'lower legs', 'neck', 'shoulders', 'upper arms', 'upper legs', 'waist']
    },
]
