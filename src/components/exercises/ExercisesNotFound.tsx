import React from 'react'
import { useActions } from '../../hooks/useActions'

interface IExercisesNotFound { }

const ExercisesNotFound: React.FC<IExercisesNotFound> = () => {
    const { setSearchValue, setEquipment, setOptions } = useActions()

    function handleButtonClick() {
        setSearchValue('')
        setEquipment('')
        setOptions({ value: '', name: 'bodyPart' })
    }
    return (

        <div className='exercise-not-found'>
            <h3 className='exercise-not-found__title'>Oops!<br /><span>something went wrong!</span></h3>
            <p className='exercise-not-found__text'>Please consider to change your search <span>(or just do bench press)</span></p>
            <button
                onClick={handleButtonClick}
                className='exercise-not-found__button'
                type='button'>All exercises</button>
        </div>
    )
}

export { ExercisesNotFound }