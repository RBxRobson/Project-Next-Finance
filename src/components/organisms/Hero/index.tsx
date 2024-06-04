import * as S from './styles'

import { abstractDesignHero, verifyIcon } from '../../../assets/images'
import Button from '../../atoms/Button'
import SectionContainer from '../../templates/SectionContainer'

type Props = {
  heroData: Home['hero']
}

const Hero = ({ heroData }: Props) => {
  return (
    <S.HeroContent className="container">
      <S.HeroTitleWrapper>
        <S.Tag>
          <img src={verifyIcon} alt="Ícone de verificado" />
          <span>Sem verificação de crédito</span>
        </S.Tag>
        <h2>
          Bem vindo ao Next Finance, venha capacitar sua
          <span className="green-span"> jornada financeira</span>
        </h2>
        <p>{heroData.description}</p>
        <Button buttonText="Abra sua conta" type="primary" />
      </S.HeroTitleWrapper>
      <S.AbstractDesign src={abstractDesignHero} />
    </S.HeroContent>
  )
}

export default Hero
