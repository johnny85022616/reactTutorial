import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import allReducer from './redux/reducers';
import { createStore, applyMiddleware, compose  } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducer,
  composeEnhancers(applyMiddleware(thunk))
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
