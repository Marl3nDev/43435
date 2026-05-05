import { Link } from 'react-router-dom';

import { PagePaths } from '@/shared/configs/routerConfig/routerConfig.jsx';
import './Logo.css'

export const Logo = () => {
  return (
    <Link className={'logo'} to={PagePaths.HOMEPAGE}>
      Лого
    </Link>
  );
};
