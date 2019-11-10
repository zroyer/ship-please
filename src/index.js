import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import './styles.less';

const store = createStore(rootReducer)
console.log(store)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
