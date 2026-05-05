import anima from '@/shared/assets/images/anima.gif'

import './Loading.css'

export const Loading = () => {
  return (
    <div className="loading">
       <h5 className={'loading__title'}>идет поиск</h5>
      <img  src={anima}  alt={'loading gif'}/>
    </div>
  );
};
