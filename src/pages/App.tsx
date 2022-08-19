import womanImage from '../assets/woman-image.png'
import CardActivity from '../components/CardActivity'
import ContactButton from "../components/ContactButton"
import Frontend from "../templates/Frontend"
import * as S from './styles'

function App() {

  return (
    <Frontend>
      <S.Container>
        <div>
          <h1>Design driven development of your web product</h1>
          <h6>We are a full service digital agency that builds immesive user experience.</h6>
          <ContactButton />
        </div>
        <S.ColumnImage>
          <CardActivity />
          <img src={womanImage} alt="Mulher pesquisando" />
        </S.ColumnImage>
      </S.Container>
    </Frontend>
  )
}

export default App
