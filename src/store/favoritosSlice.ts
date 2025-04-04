import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App'

interface FavoritosState {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    toggleFavorito: (state, action: PayloadAction<Produto>) => {
      const index = state.itens.findIndex(
        (item) => item.id === action.payload.id
      )
      if (index >= 0) {
        state.itens.splice(index, 1) // Remove se já existir
      } else {
        state.itens.push(action.payload) // Adiciona se não existir
      }
    }
  }
})

export const { toggleFavorito } = favoritosSlice.actions
export default favoritosSlice.reducer
