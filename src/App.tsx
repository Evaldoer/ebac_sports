import { useSelector } from 'react-redux'
import { GlobalStyle } from './styles'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { RootState } from './store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)
  const itensNoCarrinho = useSelector(
    (state: RootState) => state.carrinho.itens
  )

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={itensNoCarrinho} />
        <Produtos />
      </div>
    </>
  )
}

export default App
