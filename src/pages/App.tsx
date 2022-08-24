import ProductInfo from '../components/ProductInfo'
import ProductStats from '../components/ProductStats'
import Frontend from "../templates/Frontend"
import * as S from './styles'

function App() {

  return (
    <Frontend>
      <S.Container>
        <ProductInfo />
        <ProductStats />
      </S.Container>
    </Frontend>
  )
}

export default App
