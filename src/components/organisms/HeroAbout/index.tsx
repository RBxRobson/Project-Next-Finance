import * as S from '../HeroCareers/styles'

import { radialDesignLeft } from '../../../assets/images'

type Props = {
  heroData: About['hero']
}

const HeroAbout = ({ heroData }: Props) => {
  return (
    <S.Hero className="container">
      <S.Banner src={heroData.img} />
      <S.HeroText>
        <h4>{heroData.subTitle}</h4>
        <h2>
          Onde o setor bancário encontra a <span>Excelência</span>
        </h2>
        <p>{heroData.description}</p>
      </S.HeroText>
      <S.RadialDesign src={radialDesignLeft} />
    </S.Hero>
  )
}

export default HeroAbout
