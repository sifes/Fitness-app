import { DataItem } from "../types";

// constants, ENUMS
export enum PATH {
    INDEX = '/',
    EXERCISES = '/exercises',
}
export enum BODY {
    LOWER_LEGS = 'lower legs',
    UPPER_LEGS = 'upper legs',
    CHEST = 'chest',
    NECK = 'neck',
    BACK = 'back',
    ABS = 'abs',
    SHOULDERS = 'shoulders',
    LOWER_ARMS = 'lower arms',
    UPPER_ARMS = 'upper arms',
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
// const muscle = ["abductors", "abs", "adductors", "biceps", "calves",
//     "cardiovascular system", "delts", "forearms", "glutes", "hamstrings", "lats",
//     "levator scapulae", "pectorals", "quads",
//     "serratus anterior", "spine", "traps", "triceps", "upper back"],
// const equipment = ["assisted",
//     "band",
//     "barbell",
//     "body weight",
//     "bosu ball",
//     "cable",
//     "dumbbell",
//     "elliptical machine",
//     "ez barbell",
//     "hammer",
//     "kettlebell",
//     "leverage machine",
//     "medicine ball",
//     "olympic barbell",
//     "resistance band",
//     "roller",
//     "rope",
//     "skierg machine",
//     "sled machine",
//     "smith machine",
//     "stability ball",
//     "stationary bike",
//     "stepmill machine",
//     "tire",
//     "trap bar",
//     "upper body ergometer",
//     "weighted",
//     "wheel roller"]