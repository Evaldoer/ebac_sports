import { configureStore } from '@reduxjs/toolkit'
import favoritosReducer from './favoritosSlice'
import carrinhoReducer from './carrinhoSlice'
import { produtosApi } from './produtosApi'
import imagensReducer from './imagensSlice' // ✅ Importação correta

export const store = configureStore({
  reducer: {
    imagens: imagensReducer, // ✅ Já está sendo usado aqui corretamente
    favoritos: favoritosReducer,
    carrinho: carrinhoReducer,
    [produtosApi.reducerPath]: produtosApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(produtosApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
