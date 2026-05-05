import Slider from 'rc-slider';
import { useState } from 'react';

import 'rc-slider/assets/index.css';
import './Range.css'

const Handle = ({ props }) => {
  const { ...restProps } = props;

  const min = restProps['aria-valuemin'];
  const max = restProps['aria-valuemax'];
  const now = restProps['aria-valuenow'];

  return (
    <div {...restProps}>
      <div className="range__hangle">
        {now !== min && now !== max && (
          <div className="range__handle-value">{now}</div>
        )}
      </div>
    </div>
  );
};

export const PriceRange = ({ min, max, to, from, onAfterComplete }) => {

  const [value, setValue] = useState([to || min, from  || max]);
  return (
    <div className="range">
      <div className="range__from-to">
        <span>от</span>
        <span>до</span>
      </div>
      <Slider
        handleRender={Handle}
        className="range__slider"
        range
        min={min}
        max={max}
        onChangeComplete={onAfterComplete}
        value={value}
        onChange={(vals) => {
          const [a, b] = vals;

          setValue(a < b ? vals : [a, b]);
        }}
      />

      <div className="range__bottom">
        <span>{min}</span>
        <span>{max}</span>
      </div>

    </div>
  );
};