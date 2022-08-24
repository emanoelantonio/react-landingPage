import womanImage from '../../assets/woman-image.png'
import CardActivity from '../CardActivity'
import * as S from './styles'

const ProductStats = () => {
  return (
    <S.Container>
          <CardActivity />
          <img src={womanImage} alt="Mulher pesquisando" />
    </S.Container>
  )
}

export default ProductStats