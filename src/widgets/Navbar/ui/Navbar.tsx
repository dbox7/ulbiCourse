import { FC } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import { CustomLink } from "shared/ui/CustomLink/CustomLink";

import cls from './Navbar.module.scss'
import { CustomButton } from "shared/ui/CustomButton";
import DarkThemeIcon from 'shared/assets/icons/dark_theme.svg';
import LigthThemeIcon from 'shared/assets/icons/light_theme.svg';
import { useTheme } from "app/providers/ThemeProvider";
import { customButtonTheme } from "shared/ui/CustomButton/ui/CustomButton";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = ({className}) => {

  const {theme, toggleTheme} = useTheme();

  return ( 
    <div className={classNames(cls.navbar, {}, [className])}>
      <CustomButton
        onClick={toggleTheme}
        theme={customButtonTheme.CLEAR}
      >
        {
          theme === Theme.DARK 
            ? <DarkThemeIcon width={30} /> 
            : <LigthThemeIcon width={30} fill='lightGrey' />
        }
      </CustomButton>
      <CustomLink to='/'>Главная</CustomLink>
      <CustomLink to='/about'>О нас</CustomLink>
    </div>
  );
}