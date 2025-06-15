import { useTranslation } from "react-i18next";
import { CustomButton } from "shared/ui/CustomButton";

const MainPage = () => {
  const {t} = useTranslation('mainPage');

  const onThrowError = () => {throw new Error()};

  return ( 
    <div>
      <CustomButton onClick={onThrowError}>Вызвать ошибку</CustomButton>
      {t('MainPageTitle') as string}
    </div>
  );
}
 
export default MainPage;