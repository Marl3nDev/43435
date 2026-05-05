

import CoffeeSvg from '@icons/coffee.svg'
import ConditionerSvg from '@icons/conditioner.svg?react'
import ExpressSvg from '@icons/express.svg?react'
import UnderwearSvg from '@icons/underwear.svg?react'
import WiFiSvg from '@icons/wi-fi-2.svg?react'

import { cn } from '@/shared/utils/cn/cn.js'

import './TicketServices.css'

export const TicketServices = ({ className, have_wifi, is_express, have_air_conditioning }) => {
  return (
    <div className={cn('ticket-services', [className])}>
      {have_wifi && <WiFiSvg />}
      {is_express && <ExpressSvg />}
      {have_air_conditioning && <ConditionerSvg />}
    </div>
  );
};
