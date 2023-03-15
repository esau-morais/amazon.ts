import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { CartProvider } from './providers/cart'
import reducer, { initialState } from './providers/reducer'
import Global from './styles/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global />
    <CartProvider initialState={initialState} reducer={reducer}>
      <App />
    </CartProvider>
  </React.StrictMode>,
)
