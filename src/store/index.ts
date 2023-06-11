import { configureStore } from '@reduxjs/toolkit'
import { ContatoReducer } from './reducers/contatos'
import { FiltroReducer } from './reducers/filtros'

export const store = configureStore({
  reducer: {
    contatos: ContatoReducer,
    filtroDeBusca: FiltroReducer
  }
})


export type RootReducer = ReturnType<typeof store.getState>
