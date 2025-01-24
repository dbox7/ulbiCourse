import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const {t} = useTranslation('aboutPage');
  return ( 
    <div>{t('AboutPageTitle') as string}</div>
  );
}
 
export default AboutPage;