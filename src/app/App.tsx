import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';

import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from '../widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';

const App = () => {

  const {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <div className='layoutWrapper'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div> 
  );
}
 
export default App;