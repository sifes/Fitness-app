import React from 'react'
import Slider from "react-slick";

import { BodyPartsData, sliderSettings } from '../../utils/constants';
import { useCustomDispatch, useCustomSelector } from '../../hooks';
import { toggleIsBodyPartShown } from '../../store/slices/exersicesSlice';
import { DataItem } from '../../types';
import { Option } from './Option';


const Options: React.FC = () => {
  const { isBodyPartsShown, selectedOptions } = useCustomSelector(state => state.exercisesReducer)
  const dispatch = useCustomDispatch()
  function handleButtonClick() {
    dispatch(toggleIsBodyPartShown())
  }

  const OptionsData: DataItem[] = [
    {
      name: 'bodyPart',
      data: ['back', 'cardio', 'chest', 'lower arms', 'lower legs', 'neck', 'shoulders', 'upper arms', 'upper legs', 'waist']
    },
  ]
  return (
    <div className="body-parts">
      <div className="body-parts__header">
        <h5>Dont know any exercises or what to search? We can help you!</h5>
        <button type='button' className='hvr-reveal' onClick={handleButtonClick}>See Options</button>
      </div>
      {
        isBodyPartsShown &&
        // <Slider {...sliderSettings}>
        //   {BodyPartsData?.map(bodyPart => <BodyPart key={bodyPart} title={bodyPart} />)}
        // </Slider>
        OptionsData.map((option) =>
          <Slider key={option.name} {...sliderSettings}>
            {option.data?.map(optionItem => <Option key={optionItem} name={option.name} title={optionItem} currentValue={selectedOptions[option.name]} />)}
          </Slider>
        )
      }
    </div>
  )
}


export { Options }