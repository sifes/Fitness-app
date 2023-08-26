import React from 'react'
import Category from './Category'
import { useCustomSelector } from '../../../hooks'

const Categories: React.FC<any> = () => {
  const state = useCustomSelector(state => state.bodyParts)
  console.log(state);
  const data = ["back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist"]
  return (
    <div className='categories'>
      {
        data.map(category => <Category key={category} title={category} />)
      }

    </div>
  )
}


export default Categories