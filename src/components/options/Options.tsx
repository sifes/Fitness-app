import React from 'react'
import Slider from "react-slick";
import { useExercisesSelector, useOptionsSelector } from '../../hooks/store';
import { Option } from './Option';
import { useActions } from '../../hooks/useActions';
import { OptionsData, sliderSettings } from '../../utils/constants';
import OptionsSelect from '../CustomSelect';

const Options: React.FC = () => {
  const { isOptionsShown, HoveredBody, selectedOptions } = useOptionsSelector()
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
        isOptionsShown &&
        <>
          <OptionsSelect />

          {OptionsData.map((option) => // if i want to add more options
            <Slider key={option.name} {...sliderSettings}>
              {option.data?.map(optionItem => <Option key={optionItem} name={option.name} title={optionItem} currentValue={selectedOptions[option.name]} />)}
            </Slider>
          )}

        </>
      }
    </div>
  )
}


export { Options }