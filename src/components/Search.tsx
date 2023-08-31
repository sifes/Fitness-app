import React from 'react'
import { useCustomDispatch } from '../hooks'
import { setSearchValue } from '../store/slices/exersicesSlice'
import { Link } from 'react-scroll';

const Search: React.FC = () => {
    const [inputValue, setinputValue] = React.useState<string>('') // this is a local state of input. it is for that user can see value, but it is actually wont search until he press enter or search button
    const dispatch = useCustomDispatch()

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) { // <========================== HERE YOU SHPULD WRITE TYPES Event<HTMLInputElement>
        setinputValue(event.target.value)
    }
    function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) { // <========================== HERE YOU SHPULD WRITE TYPES Event<HTMLInputElement>
        if (event.key === 'Enter') {
            dispatch(setSearchValue(inputValue))
            setinputValue('')
        }
    }
    function handleButtonCLick(event: React.MouseEvent<HTMLButtonElement>) { // <========================== HERE YOU SHPULD WRITE TYPES Event<HTMLInputElement>
        event.preventDefault()
        dispatch(setSearchValue(inputValue))
        setinputValue('')
    }
    return (
        <div className="search" >
            <input
                type="text"
                placeholder='search for an exercise'
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
            />
            <Link to='exercises' smooth duration={500}>
                <button className='search__button' onClick={handleButtonCLick}>Search</button>
            </Link>
        </div>
    )
}

export default Search