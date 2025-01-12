import { FC } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import { CustomLink } from "shared/ui/CustomLink/CustomLink";

import cls from './Navbar.module.scss'

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = ({className}) => {
  return ( 
    <div className={classNames(cls.navbar, {}, [className])}>
      <CustomLink to='/'>Главная</CustomLink>
      <CustomLink to='/about'>О нас</CustomLink>
    </div>
  );
}