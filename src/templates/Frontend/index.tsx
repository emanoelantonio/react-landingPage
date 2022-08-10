import * as S from './styles'


type FronendProps = {
  children: React.ReactNode
}

const Frontend = ({children}: FronendProps) => {
  return (
    <S.Container>
      Frontend {children}
    </S.Container>
  )
}

export default Frontend