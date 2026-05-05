import LocationSvg from '@icons/location-2.svg?react'
import { useState } from 'react';


import { useCitiesSearch } from './hooks/useCitiesSearch.jsx';
import { LocationList } from './LocationList.jsx';

import { Input } from '@/shared/ui/Input/Input.jsx';



import './LocationInput.css'

export const LocationInput = ({ placeholder, value, error, setValue }) => {
  const [focused, setFocused] = useState(false);
  const { data:items = [] } = useCitiesSearch(value);

  const onFocus = () => setFocused(true);
  const onBlur = () =>    setFocused(false)

  const onChange = (e) => {
    if(items.length === 1 && items[0].name === e.target.value.toLowerCase()){
      setValue({
        name: e.target.value,
        id: items[0]._id
      })
      return
    }
    setValue({
      name: e.target.value,
      id:  null
    })
  }


  return (
    <Input
      inputClass="location-input"
      value={value}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      error={error}
      placeholder={placeholder}>
      <LocationSvg className="location-input__icon"/>
      {items.length > 0 && value.length > 0 && <div className={'location-input__clue'}>
        <span className={'location-input__clue-hidden'}>
          {value}
        </span>
        {items[0].name.slice(value.length)}
      </div>}
      {items.length > 0 && items[0].name !== value.toLowerCase()  &&
        <LocationList items={items} focused={focused} setValue={setValue}/>}
    </Input>
  );
};
