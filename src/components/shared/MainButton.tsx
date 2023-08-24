import React from 'react'

export const MainButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <button className='main-button'>
            <span>{children}</span>
        </button>
    )
}