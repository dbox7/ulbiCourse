import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";

import cls from './CustomButton.module.scss'

export enum customButtonTheme {
  CLEAR = 'clear'
}

interface ICustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  theme?: customButtonTheme
}

export const CustomButton: FC<ICustomButtonProps> = ({ className, theme, children, ...otherProps }) => {
  return ( 
    <button
      className={classNames(cls.customButton, {}, [className, cls.clear])}
      {...otherProps}
    >
      {children}
    </button>
  );
}