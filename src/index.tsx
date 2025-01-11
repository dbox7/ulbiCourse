import { createRoot } from 'react-dom/client';
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import ThemeContextProvider from './theme/ThemeContextProvider';

const root = createRoot(document.getElementById('root'));

root.render(
      <BrowserRouter>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
      </BrowserRouter>
      )