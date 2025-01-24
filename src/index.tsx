import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from 'app/providers/ThemeProvider';
import App from 'app/App';

import 'shared/config/i18n/i18n';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
  </BrowserRouter>
)