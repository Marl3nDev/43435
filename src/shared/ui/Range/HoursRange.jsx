import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from 'react';

import './Range.css'

const Handle = ({ props }) => {
  const {
    ['aria-valuemin']: min,
    ['aria-valuemax']: max,
    ['aria-valuenow']: now,
    ...restProps
  } = props;

  return (
    <div {...restProps}>
      <div className="range__hangle">
        {now !== min && now !== max && (
          <div className="range__handle-value">{now}:00</div>
        )}
      </div>
    </div>
  );
};
export const HoursRange = ({ from, to, onAfterComplete }) => {

  const [value, setValue] = useState([from || 0, to || 24]);
  return (
    <div className="range">
      <Slider
        handleRender={Handle}
        className="range__slider range__hours"
        range
        min={0}
        max={24}
        onChangeComplete={onAfterComplete}
        value={value}
        onChange={(vals) => {
          const [a, b] = vals;

          setValue(a < b ? vals : [a, b]);
        }}
      />

      <div className="range__bottom">
        <span>0:00</span>
        <span>24:00</span>
      </div>

    </div>
  );
};