import React from 'react'
import Slider from "react-slick";
import { OptionsData, sliderSettings } from '../../utils/constants';
import { useExercisesSelector } from '../../hooks/store';
import { Option } from './Option';
import { useActions } from '../../hooks/useActions';


const Options: React.FC = () => {
  const { isBodyPartsShown, selectedOptions } = useExercisesSelector()
  const { toggleIsBodyPartShown } = useActions()

  function handleButtonClick() {
    toggleIsBodyPartShown()
  }

  return (
    <div className="body-parts">
      <div className="body-parts__header">
        <h5>Dont know any exercises or what to search? We can help you!</h5>
        <button type='button' className='hvr-reveal' onClick={handleButtonClick}>See Options</button>
      </div>
      {
        isBodyPartsShown &&
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