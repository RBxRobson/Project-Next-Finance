import * as S from './styles'

import abstractDesign from '../../assets/images/abstract_design_hero.svg'
import iconVerify from '../../assets/images/verify_icon.png'

type Props = {
  home: Home
}

const Hero = ({ home }: Props) => {
  return (
    <S.HeroContent className="container">
      <S.HeroTitleWrapper>
        <S.Tag>
          <img src={iconVerify} alt="Ícone de verificado" />
          <span>Sem verificação de crédito</span>
        </S.Tag>
        <h2>
          Bem vindo ao Next Finance, venha capacitar sua
          <span className="green-span"> jornada financeira</span>
        </h2>
        <p>{home.hero.description}</p>
        <S.BtnOpenAccount className="green-button" type="button">
          Abra sua conta
        </S.BtnOpenAccount>
      </S.HeroTitleWrapper>
      <S.AbstractDesign src={abstractDesign} />
    </S.HeroContent>
  )
}

export default Hero
