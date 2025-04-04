import { createSlice } from '@reduxjs/toolkit'

const imagensSlice = createSlice({
  name: 'imagens',
  initialState: {
    lista: []
  },
  reducers: {
    setImagens: (state, action) => {
      state.lista = action.payload
    }
  }
})

export const { setImagens } = imagensSlice.actions
export default imagensSlice.reducer
