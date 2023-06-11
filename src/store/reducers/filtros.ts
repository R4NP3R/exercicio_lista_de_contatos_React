import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type FiltroState = {
  termo: string
}

const initialState: FiltroState = {
  termo: ''
}

const FiltroSlice = createSlice({
  name: 'FiltroDeBusca',
  initialState,
  reducers: {
    pesquisa: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { pesquisa } = FiltroSlice.actions

export const FiltroReducer = FiltroSlice.reducer
