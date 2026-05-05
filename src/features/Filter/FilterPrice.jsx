import { useTickets } from '@/shared/hooks/useTickets/useTickets.jsx';
import { PriceRange } from '@/shared/ui/Range/PriceRange.jsx';
import { Title } from '@/shared/ui/Title/Title.jsx';

const MAX_PRICE = 8000;
const MIN_PRICE = 0;

export const FilterPrice = () => {
  const { params, searchTicketsWithParams } = useTickets()

  const onAfterComplete = ([min, max]) => {
    const newParams = { ...params };
    if (min > MIN_PRICE) newParams.price_from = min
    else delete newParams.price_from

    if (max < MAX_PRICE) newParams.price_to = max
    else delete newParams.price_to

    searchTicketsWithParams(newParams)
  }

  return (
    <div className="filter__block filter__price">
      <Title className={'filter__title'}>Стоимость</Title>
      <PriceRange min={MIN_PRICE} max={MAX_PRICE}
                  to={params.price_to}
                  from={params.price_from}
                  onAfterComplete={onAfterComplete}/>
    </div>
  );
};
