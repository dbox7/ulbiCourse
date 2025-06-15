import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss'
import { CustomButton } from 'shared/ui/CustomButton';
import { useNavigate } from 'react-router-dom';

export const PageError = () => {
  const {t} = useTranslation();
  const navigate = useNavigate()

  const navToMainPage = () => navigate('/')

  return ( 
    <div className={cls.pageErrorWrapper}>
      {t('Something was wrong')}
      <CustomButton onClick={navToMainPage}>{t('Back to main page')}</CustomButton>
    </div>
  );
}