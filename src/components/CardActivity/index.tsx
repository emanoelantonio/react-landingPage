import { TbArrowBigTop } from 'react-icons/tb'
import * as S from './styles'

const CardActivity = () => {
  return (
    <S.Container>
      <small>Activity</small>
      <strong>18 <TbArrowBigTop size={20} color="#fff" /> </strong>
      
      <i className="circle-1"></i>
      <i className="circle-2"></i>
      <i className="circle-3"></i>
    </S.Container>
  )
}

export default CardActivity