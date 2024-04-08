import * as S from './styles'

import logo from '../../assets/images/bank_logo.svg'

const NavBar = () => {
  return (
    <S.Header className="container">
      <S.Logo>
        <img src={logo} alt="logo do banco" />
        <h1>Next Finance</h1>
      </S.Logo>
      <S.Nav>
        <S.Links className="active">Home</S.Links>
        <S.Links>Trabalhe Conosco</S.Links>
        <S.Links>Sobre</S.Links>
        <S.Links>Segurança</S.Links>
      </S.Nav>
      <S.AccessButtons>
        <S.BtnSignUp type="button">Cadastre-se</S.BtnSignUp>
        <S.BtnLogin type="button">Login</S.BtnLogin>
      </S.AccessButtons>
    </S.Header>
  )
}

export default NavBar
