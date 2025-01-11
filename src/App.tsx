import { Route, Routes } from 'react-router-dom';
import { AboutPageLazy } from './pages/AboutPage/AboutPageLazy';
import { MainPageLazy } from './pages/MainPage/MainPageLazy';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import useTheme from './theme/useTheme';
import './index.scss';

const App = () => {

  const {theme, toggleTheme} = useTheme();

  return (
    <div className={`app ${theme}`}>
        <button onClick={toggleTheme}>Смениить тему</button>
        <Link to='/'>Главная</Link>
        <Link to='/about'>О нас</Link>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<MainPageLazy />}/>
            <Route path='/about' element={<AboutPageLazy />}/>
          </Routes>
        </Suspense>
    </div> 
  );
}
 
export default App;