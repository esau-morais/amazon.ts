import { createContext, PropsWithChildren, useContext, useReducer } from 'react'

import reducer, { initialState } from './reducer'

type CardPropviderProps = {
  reducer: typeof reducer
  initialState: typeof initialState
}

export const CartContext = createContext({})

export const CartProvider = ({ reducer, initialState, children }: PropsWithChildren<CardPropviderProps>) => (
  <CartContext.Provider value={useReducer(reducer, initialState)} >
    {children}
  </CartContext.Provider>
)

export const useCartValue = () => useContext(CartContext) as [typeof initialState, typeof reducer]
