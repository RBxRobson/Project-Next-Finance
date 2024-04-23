import * as S from './styles'

import abstractDesign from '../../assets/images/abstract_design_hero.svg'
import iconVerify from '../../assets/images/verify_icon.png'

const Hero = () => {
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
        <p>
          A equipe do Next Finance, tem a missão de oferecer soluções bancárias
          completas que capacitam indivíduos e empresas a alcançar seus
          objetivos financeiros. Estamos comprometidos em fornecer serviços
          personalizados e inovadores que atendem às necessidades de nossos
          clientes.
        </p>
        <S.BtnOpenAccount className="green-button" type="button">
          Abra sua conta
        </S.BtnOpenAccount>
      </S.HeroTitleWrapper>
      <S.AbstractDesign src={abstractDesign} alt="" />
    </S.HeroContent>
  )
}

export default Hero
