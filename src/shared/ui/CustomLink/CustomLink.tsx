import { FC } from "react";
import { Link } from "react-router-dom";
import { LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/ClassNames/classNames";

import cls from './CustomLink.module.scss';

enum CustomLinkThemes {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface ICustomLinkProps extends LinkProps {
  className?: string;
  theme?: CustomLinkThemes
}

export const CustomLink: FC<ICustomLinkProps> = ({ 
  className, 
  theme = CustomLinkThemes.PRIMARY, 
  to, 
  children, 
  ...otherProps 
}) => {
  return (
    <Link
      to={to}
      className={classNames(
        cls.customLink, 
        {}, 
        [className, cls[theme]]
      )}
      {...otherProps}
    >
      {children}
    </Link>
  );
}