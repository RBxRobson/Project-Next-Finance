import * as S from './styles'

import logo from '../../assets/images/bank_logo.svg'
import IconLocal from '../../assets/images/icon_local.png'
import IconMail from '../../assets/images/icon_mail.png'
import IconTelephone from '../../assets/images/icon_telephone.png'

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
        <S.InfosContact>
          <li>
            <img src={IconMail} alt="Ícone de email" />
            <p>emailteste@gmail.com</p>
          </li>
          <li>
            <img src={IconTelephone} alt="Ícone de telefone" />
            <p>+55 54 9 9999-9999</p>
          </li>
          <li>
            <img src={IconLocal} alt="Ícone de localização" />
            <p>Barros Cassal - RS</p>
          </li>
        </S.InfosContact>
      </div>
    </S.Footer>
  )
}

export default Footer
