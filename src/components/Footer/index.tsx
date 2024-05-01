import * as S from './styles'

import logo from '../../assets/images/bank_logo.svg'

const Footer = () => {
  return (
    <S.Footer>
      <div className="container">
        <S.Logo>
          <img src={logo} alt="logo do banco" />
          <h1>Next Finance</h1>
        </S.Logo>
        <S.Links>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Trabalhe conosco</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Segurança</a>
          </li>
        </S.Links>
      </div>
    </S.Footer>
  )
}

export default Footer
