import * as S from '../HeroCareers/styles'

import { radialDesignLeft } from '../../../assets/images'

type Props = {
  heroData: Security['hero']
}

const HeroSecurity = ({ heroData }: Props) => {
  return (
    <S.Hero className="container">
      <S.Banner src={heroData.banner} />
      <S.HeroText>
        <h2>
          Sua segurança é nossa maior <span>prioridade</span>
        </h2>
        <p>{heroData.description}</p>
      </S.HeroText>
      <S.RadialDesign src={radialDesignLeft} />
    </S.Hero>
  )
}

export default HeroSecurity
