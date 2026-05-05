import ArrowOrangeLeft from '@icons/arrow-orange-left.svg?react';
import ArrowOrangeRight from '@icons/arrow-orange-right.svg?react';

import { useTickets } from '@/shared/hooks/useTickets/useTickets.jsx'
import { HoursRange } from '@/shared/ui/Range/HoursRange.jsx';
import { Title } from '@/shared/ui/Title/Title.jsx';
import { ToggleContent } from '@/shared/ui/ToggleContent/ToggleContent.jsx';


const FIELDS = [
  {
    label: 'Время отбытия',
    from: 'departure_hour_from',
    to: 'departure_hour_to',
  },
  {
    label: 'Время прибытия',
    from: 'arrival_hour_from',
    to: 'arrival_hour_to',
  },
];

const GROUPS = [
  {
    title: 'Туда',
    icon: ArrowOrangeRight,
    prefix: 'start',
  },
  {
    title: 'Оттуда',
    icon: ArrowOrangeLeft,
    prefix: 'end',
    condition: (params) => params.date_end,
  },
];

export const FilterHours = () => {
  const { params, searchTicketsWithParams } = useTickets();

  const onAfterComplete = ([min, max], fromKey, toKey) => {
    const newParams = { ...params };

    if (min > 0) newParams[fromKey] = min;
    else delete newParams[fromKey];

    if (max < 24) newParams[toKey] = max;
    else delete newParams[toKey];

    searchTicketsWithParams(newParams);
  };

  const renderGroup = (group) => {
    const { title, icon, prefix } = group;

    if (group.condition && !group.condition(params)) return null;

    return (
      <div key={prefix} className="filter__block filter__hours-block">
        <ToggleContent
          icon={icon}
          title={<Title className="filter__title" h={3}>{title}</Title>}
        >
          {FIELDS.map(({ label, from, to }) => {
            const fromKey = `${prefix}_${from}`;
            const toKey = `${prefix}_${to}`;

            return (
              <div key={fromKey} className="filter__hours-item">
                <Title h={4} className="filter__hours-title">{label}</Title>

                <HoursRange
                  from={params[fromKey]}
                  to={params[toKey]}
                  onAfterComplete={(values) =>
                    onAfterComplete(values, fromKey, toKey)
                  }
                />
              </div>
            );
          })}
        </ToggleContent>
      </div>
    );
  };

  return <>{GROUPS.map(renderGroup)}</>;
};