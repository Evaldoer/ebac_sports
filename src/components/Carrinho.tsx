import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { removerDoCarrinho } from '../store/carrinhoSlice'

function Carrinho() {
  const carrinho = useSelector((state: RootState) => state.carrinho.itens)
  const dispatch = useDispatch()

  return (
    <div>
      {carrinho.map((produto) => (
        <div key={produto.id}>
          <span>
            {produto.nome} - R$ {produto.preco}
          </span>
          <button onClick={() => dispatch(removerDoCarrinho(produto.id))}>
            Remover
          </button>
        </div>
      ))}
    </div>
  )
}

export default Carrinho
