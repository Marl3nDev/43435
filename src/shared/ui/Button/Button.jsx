import { Link } from 'react-router-dom';

import { cn } from  '@/shared/utils/cn/cn.js'

import './Button.css'

export const Button = ({ to, children,className, variant, size, font, color, ...others }) => {
  const buttonClass = cn('button', [className], {
    ['button--' + variant]: variant,
    ['button--' + color + '-color']: color,
    ['button--' + size]: size,
    ['button--' + font]: font
  });
  if(to) {
    return <Link className={buttonClass} to={to} {...others}>
      {children}
    </Link>
  }
  return (
    <button className={buttonClass} {...others}>
      {children}
    </button>
  );
};
