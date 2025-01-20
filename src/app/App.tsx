import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/Router';

import './styles/index.scss';
import { classNames } from 'shared/lib/ClassNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {

  const {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <div className='layoutWrapper'>
          <Sidebar />
          <AppRouter />
        </div>
    </div> 
  );
}
 
export default App;