import { IExercise } from "../types"

// helper functions
export function validateString(str: string) {
    return str.toLowerCase().trim()
}
export function filterBySearch(arr: IExercise[], value: string) {
    const searchValue = validateString(value)
    return arr.filter((item) => validateString(item.bodyPart).includes(searchValue) || validateString(item.equipment).includes(searchValue) || validateString(item.name).includes(searchValue) || validateString(item.target).includes(searchValue))
}
export function filterByBodyPart(arr: IExercise[], value: string) {
    const searchValue = validateString(value)
    return arr.filter((item) => item.bodyPart.includes(searchValue))
}
