import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { CustomLink } from "shared/ui/CustomLink/CustomLink";

import cls from './Navbar.module.scss'
import { CustomButton } from "shared/ui/CustomButton";
import DarkThemeIcon from 'shared/assets/icons/dark_theme.svg';
import LigthThemeIcon from 'shared/assets/icons/light_theme.svg';
import { useTheme } from "app/providers/ThemeProvider";
import { customButtonTheme } from "shared/ui/CustomButton/ui/CustomButton";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";
import { useTranslation } from "react-i18next";

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = ({className}) => {

  const {theme, toggleTheme} = useTheme();
  const {t} = useTranslation();

  return ( 
    <div className={classNames(cls.navbar, {}, [className])} data-testid='Navbar'>
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
      <CustomLink to='/'>{t('NavbarLinkToMainPage') as string}</CustomLink>
      <CustomLink to='/about'>{t('NavbarLinkToAboutPage') as string}</CustomLink>
    </div>
  );
}