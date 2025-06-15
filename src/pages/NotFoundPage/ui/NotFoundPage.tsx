import { useTranslation } from "react-i18next";


const NotFoundPage = () => {

  const {t} = useTranslation('notFoundPage');

  return ( 
    <div>
      {t('NotFound')}
    </div>
  );
}

export default NotFoundPage