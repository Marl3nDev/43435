import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import { App } from '@/app/App.jsx'
import { QueryProvider } from '@/app/providers/QueryProvider/QueryProvider.jsx';
import { ReduxProvider } from '@/app/providers/ReduxProvider/ReduxProvider.jsx';

createRoot(document.getElementById('root')).render(
  <ReduxProvider>
    <QueryProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </QueryProvider>
  </ReduxProvider>
)
