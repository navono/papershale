import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import createStore from './configureStore';

const initialState = {};
const store = createStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

