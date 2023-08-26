import React from 'react'
import Category from './Category'

const Categories = () => {
  const data = ['all', 'chest', 'back', 'all', 'chest', 'back', 'all', 'chest',]
  return (
    <div className='categories'>
      {
        data.map(category => <Category key={category} title={category} />)
      }

    </div>
  )
}

export default Categories