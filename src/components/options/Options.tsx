import React from 'react'
import Slider from "react-slick";
import { useOptionsSelector } from '../../hooks/store';
import { Option } from './Option';
import { useActions } from '../../hooks/useActions';
import { OptionsData, sliderSettings } from '../../utils/constants';
import OptionsSelect from '../CustomSelect';
import { Body } from '../body/Body';

const Options: React.FC = () => {
  const { isOptionsShown, selectedOptions } = useOptionsSelector()
  const { toggleIsBodyPartShown } = useActions()

  function handleButtonClick() {
    toggleIsBodyPartShown()
  }

  return (
    <div className="options">
      <div className="options__header">
        <h5>Dont know any exercises or what to search? We can help you!</h5>
        <button type='button' className='hvr-reveal' onClick={handleButtonClick}>See Options</button>
      </div>
      {
        isOptionsShown &&
        <>
          <div className="options__select">
            <h5>Pick Equipment</h5>
            <OptionsSelect />
          </div>
          <div className="options__sliders">
            {OptionsData.map((option) => // if i want to add more options
              <Slider key={option.name} {...sliderSettings}>
                {option.data?.map(optionItem => <Option key={optionItem} name={option.name} title={optionItem} currentValue={selectedOptions[option.name]} />)}
              </Slider>
            )}
          </div>
          <Body />
        </>
      }
    </div>
  )
}


export { Options }