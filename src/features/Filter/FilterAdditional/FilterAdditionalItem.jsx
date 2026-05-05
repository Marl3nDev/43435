import { useTickets } from '@/shared/hooks/useTickets/useTickets.jsx';
import { Switcher } from '@/shared/ui/Switcher/Switcher.jsx';

export const FilterAdditionalItem = ({ icon: Icon, children, name }) => {
  const { params, searchTicketsWithParams } = useTickets();
  const isActive = Boolean(params[name]);

  const handleToggle = () => {
    const newParams = { ...params };
    if (newParams[name]) {
      delete newParams[name];
    } else {
      newParams[name] = true;
    }

    searchTicketsWithParams(newParams);
  };

  return (
    <div className={'filter__additional-item'}>
      <div className={'filter__icon-wrapper'}>
        {Icon && <Icon/>}
      </div>
      <span>{children}</span>
      <Switcher className="filter__switcher" isActive={isActive} onClick={handleToggle}/>
    </div>
  );
};
