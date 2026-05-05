import { Provider } from 'react-redux';

import store from '@/app/store/index.js';

export const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
