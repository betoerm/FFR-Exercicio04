import React from 'react'
import ReactDom from 'react-dom'

import { Provider } from 'react-redux'
import { Store } from './store'

import App from './App'


const rootElement = document.getElementById('root');
ReactDom.render(
  <Provider store = {Store}>
    <App/>
  </Provider>,
  rootElement
)

export default App;