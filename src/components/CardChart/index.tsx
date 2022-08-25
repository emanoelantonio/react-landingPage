import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import Chart from '../Chart'

import * as S from './styles'

const CardChart = () => {
  return (
    <S.Container>
      <div>
        <BsArrowLeft/>
        <strong>Stats</strong>
        <BsArrowRight />
      </div>
        <Chart />
    </S.Container>
  )
}

export default CardChart