import React from 'react'
import { Link as LinkScroll } from 'react-scroll';
import { useActions } from '../hooks/useActions';

const Search: React.FC = () => {
    const [inputValue, setinputValue] = React.useState<string>('') // this is a local state of input. it is for that user can see value, but it is actually wont search until he press enter or search button
    const { setSearchValue } = useActions()
    const buttonRef = React.useRef<HTMLButtonElement | null>(null);

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setinputValue(event.target.value)
    }

    function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            buttonRef.current?.click()
        }
    }

    function handleButtonCLick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        setSearchValue(inputValue)
        setinputValue('')
    }
    return (
        <div className="search" >
            <input
                className="search__input"
                type="text"
                placeholder='search for an exercise'
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
            />
            <LinkScroll to='exercises' smooth duration={500}>
                <button ref={buttonRef} className={`search__button hvr-hollow ${inputValue ? 'hvr-hollow--active' : ''}`} onClick={handleButtonCLick}>Search</button>
            </LinkScroll>
        </div>
    )
}

export default Search