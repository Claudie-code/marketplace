import React from 'react';
import ReactDOM from 'react-dom';
import App from './components';
import { Provider } from "react-redux";
import  configureStore  from "./lib/state/store";
import FormProvider from './lib/hooks/useFormValidation'
import reportWebVitals from './reportWebVitals';

const store = configureStore();

store.subscribe(() => localStorage.setItem('items', JSON.stringify(store.getState().cart.items)));
store.subscribe(() => localStorage.setItem('user', JSON.stringify(store.getState().user.user)));

ReactDOM.render(
  <Provider store={store}>
    <FormProvider>
      <App />
    </FormProvider>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
