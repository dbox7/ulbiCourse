import { useTranslation } from "react-i18next";

const MainPage = () => {
  const {t} = useTranslation('mainPage');
  return ( 
    <div>{t('MainPageTitle') as string}</div>
  );
}
 
export default MainPage;