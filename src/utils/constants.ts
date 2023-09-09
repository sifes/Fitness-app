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
export const equipment = [
    { value: "assisted", label: "assisted" },
    { value: "band", label: "band" },
    { value: "barbell", label: "barbell" },
    { value: "body weight", label: "body weight" },
    { value: "bosu ball", label: "bosu ball" },
    { value: "cable", label: "cable" },
    { value: "dumbbell", label: "dumbbell" },
    { value: "elliptical machine", label: "elliptical machine" },
    { value: "ez barbell", label: "band" },
    { value: "hammer", label: "hammer" },
    { value: "kettlebell", label: "kettlebell" },
    { value: "leverage machine", label: "leverage machine" },
    { value: "medicine ball", label: "medicine ball" },
    { value: "olympic barbell", label: "olympic barbell" },
    { value: "resistance band", label: "resistance band" },
    { value: "roller", label: "roller" },
    { value: "skierg machine", label: "skierg machine" },
    { value: "sled", label: "sled" },
    { value: "machine", label: "machine" },
    { value: "smith machine", label: "smith machine" },
    { value: "stability ball", label: "stability ball" },
    { value: "stepmill machine", label: "stepmill machine" },
    { value: "tire", label: "tire" },
    { value: "trap bar", label: "trap bar" },
    { value: "upper body ergometer", label: "upper body ergometer" },
    { value: "weighted", label: "weighted" },
    { value: "wheel roller", label: "wheel roller" },

]
// const muscles = [ "abductors", "abs", "adductors", "biceps", "calves",
//     "cardiovascular system", "delts", "forearms", "glutes", "hamstrings", "lats",
//     "levator scapulae", "pectorals", "quads",
//     "serratus anterior", "spine", "traps", "triceps", "upper back"],