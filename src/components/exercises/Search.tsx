import React from 'react'
import { useCustomDispatch, useCustomSelector } from '../../hooks'
import { setSearchValue } from '../../store/slices/exersicesSlice'

const Search: React.FC = () => {
    const dispatch = useCustomDispatch()
    const { searchValue } = useCustomSelector(state => state.exercisesReducer)
    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) { // <========================== HERE YOU SHPULD WRITE TYPES Event<HTMLInputElement>
        dispatch(setSearchValue(event.target.value))
    }
    return (
        <div className="search" >
            <input type="text" placeholder='search for an exercise'
                value={searchValue}
                onChange={handleSearch}
            />
            <button type='button' >Search</button>
        </div>
    )
}

export default Search