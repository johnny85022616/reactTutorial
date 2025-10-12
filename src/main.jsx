import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './style/reset.scss'
import App from './App.jsx'
import allReducer from './redux/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
