import { useGetProdutosQuery } from '../store/produtosApi'
import { useDispatch } from 'react-redux'
import { adicionarAoCarrinho } from '../store/carrinhoSlice'
import { toggleFavorito } from '../store/favoritosSlice'
import { Produto } from '../App'

function Produtos() {
  const dispatch = useDispatch()
  const {
    data: produtos = [],
    error,
    isLoading
  } = useGetProdutosQuery(undefined)

  if (isLoading) return <p>Carregando...</p>
  if (error) return <p>Erro ao carregar produtos.</p>

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px'
      }}
    >
      {produtos.map((produto: Produto) => (
        <div
          key={produto.id}
          style={{
            border: '1px solid #ddd',
            padding: '10px',
            textAlign: 'center',
            borderRadius: '8px'
          }}
        >
          <img
            src={produto.imagem}
            alt={produto.nome}
            style={{
              width: '100%',
              height: '150px',
              objectFit: 'cover',
              borderRadius: '8px'
            }}
          />
          <h3 style={{ fontSize: '16px', margin: '10px 0' }}>{produto.nome}</h3>
          <p style={{ fontSize: '14px', fontWeight: 'bold' }}>
            R$ {produto.preco}
          </p>
          <button
            style={{ margin: '5px', padding: '8px 12px', cursor: 'pointer' }}
            onClick={() => dispatch(adicionarAoCarrinho(produto))}
          >
            Comprar
          </button>
          <button
            style={{ margin: '5px', padding: '8px 12px', cursor: 'pointer' }}
            onClick={() => dispatch(toggleFavorito(produto))}
          >
            Favoritar
          </button>
        </div>
      ))}
    </div>
  )
}

export default Produtos
