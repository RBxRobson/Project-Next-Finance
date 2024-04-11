import * as S from './styles'

import iconVerify from '../../assets/images/verify_icon.png'

const Hero = () => {
  return (
    <S.HeroContent className="container">
      <S.HeroTitleWrapper>
        <S.Tag>
          <img src={iconVerify} alt="Ícone de verificado" />
          <span>No LLC Required, No Credit Check.</span>
        </S.Tag>
        <h2>
          Welcome to YourBank Empowering Your <span>Financial Journey</span>
        </h2>
        <p>
          At YourBank, our mission is to provide comprehensive banking solutions
          that empower individuals and businesses to achieve their financial
          goals. We are committed to delivering personalized and innovative
          services that prioritize our customers needs.
        </p>
        <S.BtnOpenAccount className="green-button" type="button">
          Open Account
        </S.BtnOpenAccount>
      </S.HeroTitleWrapper>
    </S.HeroContent>
  )
}

export default Hero
