import React from 'react'
import Slider from "react-slick";

import { BodyPartsData, sliderSettings } from '../../../utils/constants';
import { BodyPart } from './BodyPart';

const BodyParts: React.FC = () => {

  return (
    <div className="body-parts">
      <Slider {...sliderSettings}>
        {BodyPartsData?.map(bodyPart => <BodyPart key={bodyPart} title={bodyPart} />)}
      </Slider>
    </div>
  )
}


export default BodyParts