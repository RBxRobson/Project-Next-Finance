import { Link } from 'react-router-dom'

import * as S from './styles'

import logo from '../../assets/images/bank_logo.svg'
import iconFacebook from '../../assets/images/facebook_icon.png'
import iconLocal from '../../assets/images/icon_local.png'
import iconMail from '../../assets/images/icon_mail.png'
import iconTelephone from '../../assets/images/icon_telephone.png'
import iconLinkedin from '../../assets/images/linkedin_icon.png'
import iconTwitter from '../../assets/images/twitter_icon.png'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

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
            <Link to="/" onClick={scrollToTop}>
              Home
            </Link>
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
            <img src={iconMail} alt="Ícone de email" />
            <p>emailteste@gmail.com</p>
          </li>
          <li>
            <img src={iconTelephone} alt="Ícone de telefone" />
            <p>+55 54 9 9999-9999</p>
          </li>
          <li>
            <img src={iconLocal} alt="Ícone de localização" />
            <p>Barros Cassal - RS</p>
          </li>
        </S.InfosContact>
        <S.FinalContentWrapper>
          <S.SocialLinks>
            <li>
              <a href="#">
                <img src={iconFacebook} alt="Ícone do facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={iconTwitter} alt="Ícone do X, antigo twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={iconLinkedin} alt="Ícone do Linkedin" />
              </a>
            </li>
          </S.SocialLinks>
          <p>Todos os direitos reservados - Next Finance</p>
          <div>
            <a href="#">Política de privacidade</a>
            <a href="#">Termos de serviço</a>
          </div>
        </S.FinalContentWrapper>
      </div>
    </S.Footer>
  )
}

export default Footer
