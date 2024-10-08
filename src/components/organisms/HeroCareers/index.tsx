import * as S from './styles'

import { radialDesignLeft } from '../../../assets/images'

type Props = {
  heroData: Careers['hero']
}

const HeroCareers = ({ heroData }: Props) => {
  return (
    <S.Hero>
      <S.Banner src={heroData.img} alt="" aria-hidden />
      <S.HeroText>
        <h2>
          Bem vindo ao centro de carreira do <span>Next Finance</span>
        </h2>
        <p>{heroData.description}</p>
      </S.HeroText>
      <S.RadialDesign src={radialDesignLeft} alt="" aria-hidden />
    </S.Hero>
  )
}

export default HeroCareers
