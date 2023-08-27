import React from 'react'
import Category from './Category'
import Slider from "react-slick";
import { useCustomSelector } from '../../../hooks'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useGetExercisesQuery } from '../../../store/api';

const Categories: React.FC<any> = () => {
  const { data, error, isLoading } = useGetExercisesQuery('bodyPartList')
  console.log(data);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],

  };
  // const data = ["back",
  //   "cardio",
  //   "chest",
  //   "lower arms",
  //   "lower legs",
  //   "neck",
  //   "shoulders",
  //   "upper arms",
  //   "upper legs",
  //   "waist"]
  return (

    <Slider {...settings}>
      {/* {
        data?.map(category => <Category key={category} title={category} />)
      } */}
    </Slider>
  )
}


export default Categories