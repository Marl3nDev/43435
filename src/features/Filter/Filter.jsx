import { FilterAdditional } from './FilterAdditional/FilterAdditional.jsx';
import { FilterDate } from './FilterDate.jsx';
import { FilterHours } from './FilterHours.jsx';
import { FilterPrice } from './FilterPrice.jsx';

import './Filter.css'

export const Filter = () => {
  return (
    <div className="filter">
      <FilterDate/>
      <FilterAdditional/>
      <FilterPrice/>
      <FilterHours/>
    </div>
  );
};
