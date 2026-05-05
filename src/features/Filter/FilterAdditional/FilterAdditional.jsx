import CoupeSvg from '@icons/coupe.svg?react'
import ExpressSvg from '@icons/express-2.svg?react'
import LuxurySvg from '@icons/luxury.svg?react'
import PlackartSvg from '@icons/plackart.svg?react'
import SitingSvg from '@icons/siting.svg?react'
import WiFiSvg from '@icons/wi-fi.svg?react'

import { FilterAdditionalItem } from './FilterAdditionalItem.jsx';

export const FilterAdditional = () => {
  return (
    <div className="filter__block filter__additional">

      <FilterAdditionalItem icon={CoupeSvg} name={'have_second_class'}>
        Купе
      </FilterAdditionalItem>
      <FilterAdditionalItem icon={PlackartSvg} name={'have_third_class'}>
        Плацкарт
      </FilterAdditionalItem>
      <FilterAdditionalItem icon={SitingSvg} name={'have_fourth_class'}>
        Сидячий
      </FilterAdditionalItem>
      <FilterAdditionalItem icon={LuxurySvg} name={'have_first_class'}>
        Люкс
      </FilterAdditionalItem>
      <FilterAdditionalItem icon={WiFiSvg} name={'have_wifi'}>
        Wi-Fi
      </FilterAdditionalItem>
      <FilterAdditionalItem icon={ExpressSvg} name={'is_express'}>
       Экспресс
      </FilterAdditionalItem>
    </div>
  );
};
