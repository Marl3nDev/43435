import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom';

import { App } from '@/app/App.jsx'
import { QueryProvider } from '@/app/providers/QueryProvider/QueryProvider.jsx';
import { ReduxProvider } from '@/app/providers/ReduxProvider/ReduxProvider.jsx';

createRoot(document.getElementById('root')).render(
  <ReduxProvider>
    <QueryProvider>
      <HashRouter>
        <App/>
      </HashRouter>
    </QueryProvider>
  </ReduxProvider>
)
