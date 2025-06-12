import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './LangSwitcher.module.scss';
import { CustomButton } from 'shared/ui/CustomButton';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {

  const {t, i18n} = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <CustomButton className={classNames(cls.langSwitcher, {}, [className])} onClick={toggleLang}>
      {t('LangSwitcherText') as string}
    </CustomButton>
  );
}