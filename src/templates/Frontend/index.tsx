import Header from '../../components/Header'
import * as S from './styles'


type FronendProps = {
  children: React.ReactNode
}

const Frontend = ({children}: FronendProps) => {
  return (
    <S.Container>
      <Header />
    </S.Container>
  )
}

export default Frontend