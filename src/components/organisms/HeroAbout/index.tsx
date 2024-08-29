import * as S from '../HeroCareers/styles'

import { radialDesignLeft } from '../../../assets/images'

type Props = {
  heroData: About['hero']
}

const HeroAbout = ({ heroData }: Props) => {
  return (
    <S.Hero>
      <S.Banner src={heroData.img} alt="" aria-hidden />
      <S.HeroText>
        <h4>{heroData.subTitle}</h4>
        <h2>
          Onde o setor bancário encontra a <span>Excelência</span>
        </h2>
        <p>{heroData.description}</p>
      </S.HeroText>
      <S.RadialDesign src={radialDesignLeft} alt="" aria-hidden />
    </S.Hero>
  )
}

export default HeroAbout
