import { Link } from 'react-router-dom'

import * as S from './styles'

import {
  bankLogo,
  facebookIcon,
  iconLocal,
  iconMail,
  iconTelephone,
  linkedinIcon,
  twitterIcon
} from '../../../assets/images'

type Page = 'home' | 'joinUs' | 'about' | 'security'

const Footer = () => {
  const pages: { name: Page; label: string }[] = [
    { name: 'home', label: 'Home' },
    { name: 'joinUs', label: 'Trabalhe Conosco' },
    { name: 'about', label: 'Sobre' },
    { name: 'security', label: 'Segurança' }
  ]

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <S.Footer>
      <div className="container">
        <S.Logo>
          <img src={bankLogo} alt="logo do banco" />
          <h1>Next Finance</h1>
        </S.Logo>
        <S.Links>
          {pages.map((page) => (
            <li key={page.name}>
              <Link
                to={page.name === 'home' ? '/' : page.name}
                onClick={scrollToTop}
              >
                {page.label}
              </Link>
            </li>
          ))}
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
                <img src={facebookIcon} alt="Ícone do facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twitterIcon} alt="Ícone do X, antigo twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={linkedinIcon} alt="Ícone do Linkedin" />
              </a>
            </li>
          </S.SocialLinks>
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
