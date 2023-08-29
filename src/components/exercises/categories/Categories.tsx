import React from 'react'
import Category from './Category'
import Slider from "react-slick";
import { useCustomSelector } from '../../../hooks'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useGetExercisesQuery } from '../../../store/api';
import { sliderSettings } from '../../../utils/constants';

const Categories: React.FC<any> = () => {
  // const { data, error, isLoading } = useGetExercisesQuery('bodyPartList')

  // const { data, error, isLoading } = useGetExercisesQuery(`bodyPart/neck`)  /////////////////////////////////////////
  // console.log(data);
  // if (isLoading) return <div>Loading...</div>
  // if (error) return <div>Error occured</div>
  const data = ['upper legs', 'back', 'neck', 'upper legs', 'back', 'neck', 'upper legs', 'back']
  return (
    <div className="categories">
      <Slider {...sliderSettings}>
        {data?.map(category => <Category key={category} title={category} />)}
      </Slider>
    </div>
  )
}


export default Categories