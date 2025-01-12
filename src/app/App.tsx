import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { useTheme } from 'app/providers';

import './styles/index.scss';

const App = () => {

  const {theme, toggleTheme} = useTheme();

  return (
    <div className={`app ${theme}`}>
        <button onClick={toggleTheme}>Смениить тему</button>
        <Link to='/'>Главная</Link>
        <Link to='/about'>О нас</Link>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/about' element={<AboutPage />}/>
          </Routes>
        </Suspense>
    </div> 
  );
}
 
export default App;