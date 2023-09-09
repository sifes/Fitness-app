import { IExercise } from "../types"

// helper functions
export function validateString(str: string) {
    return str.toLowerCase().trim()
}
export function filterBySearch(arr: IExercise[], value: string) {
    const searchValue = validateString(value)
    arr.map(object => Object.values(object).map(value => validateString(value)))
    return arr.filter((item) => item.bodyPart.includes(searchValue) || item.equipment.includes(searchValue) || item.name.includes(searchValue) || item.target.includes(searchValue))
}
export function filterByEquipment(arr: IExercise[], value: string) {
    const searchValue = validateString(value)
    return arr.filter((item) => {
        return validateString(item.equipment).includes(searchValue)
    })
}
export function filterByBodyPart(arr: IExercise[], value: string) {
    const searchValue = validateString(value)
    return arr.filter((item) => item.bodyPart.includes(searchValue))
}
