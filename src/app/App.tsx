import { Link } from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/Router';

import './styles/index.scss';
import { classNames } from 'shared/lib/ClassNames/classNames';
import { Navbar } from 'widgets/Navbar';

const App = () => {

  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <AppRouter />
        <button onClick={toggleTheme}>Смениить тему</button>
    </div> 
  );
}
 
export default App;