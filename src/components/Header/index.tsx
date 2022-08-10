import Button from '../Button'
import Logo from '../Logo'
import Menu from '../Menu'
import * as S from './styles'

const Header = () => {
  return (
    <S.Navbar>
      <Logo />
      <Menu />
      <Button />
    </S.Navbar>
  )
}

export default Header
