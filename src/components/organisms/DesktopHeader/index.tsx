import * as S from './styles'

import Button from '../../atoms/Button'
import Slogan from '../../molecules/Slogan'
import Nav from '../Nav'

const DesktopHeader = () => {
  return (
    <S.DesktopHeader className="container">
      <Slogan />
      <Nav type="desktop" />
      <S.AccessButtons>
        <Button
          buttonText="Cadastre-se"
          type="primary"
          className="is--deactivated register-btn"
        />
        <Button buttonText="Login" type="primary" />
      </S.AccessButtons>
    </S.DesktopHeader>
  )
}

export default DesktopHeader
