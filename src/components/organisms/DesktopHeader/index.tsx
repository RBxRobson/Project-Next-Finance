import * as S from './styles'

import AccessButtons from '../../molecules/AccessButtons'
import Slogan from '../../molecules/Slogan'
import Nav from '../Nav'

const DesktopHeader = () => {
  return (
    <S.DesktopHeader className="container">
      <Slogan />
      <Nav type="desktop" />
      <AccessButtons />
    </S.DesktopHeader>
  )
}

export default DesktopHeader
