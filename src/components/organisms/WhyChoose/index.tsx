import * as S from './styles'

import { radialDesignLeft, radialDesignRight } from '../../../assets/images'
import SectionContainer from '../../templates/SectionContainer'

type Props = {
  whyChooseData: Home['why_choose']
}

const WhyChoose = ({ whyChooseData }: Props) => {
  const {
    description: forPeopleDescription,
    statistics: forPeopleStatistics,
    cards: forPeopleCards
  } = whyChooseData.for_people
  const {
    description: forBusinessesDescription,
    statistics: forBusinessesStatistics,
    cards: forBusinessesCards
  } = whyChooseData.for_businesses

  return (
    <SectionContainer
      titleSection={{ title: 'Porque escolher o ', markText: 'Next Finance' }}
      descriptionSection={whyChooseData.description}
    >
      <>
        <S.WhyChooseArticle className="column-reverse">
          <S.Cards className="position-left">
            {forPeopleCards.map((card) => (
              <S.Card key={card.id}>
                <img src={card.icon} alt="" aria-hidden />
                <p>{card.name}</p>
              </S.Card>
            ))}
          </S.Cards>
          <S.DescriptionContainer>
            <h3>Pessoa Física</h3>
            <p>{forPeopleDescription}</p>
            <S.StaticsWrapper>
              {forPeopleStatistics.map((statistic) => (
                <li key={statistic.id}>
                  <span>{statistic.value}</span>
                  <p>{statistic.name}</p>
                </li>
              ))}
            </S.StaticsWrapper>
          </S.DescriptionContainer>
        </S.WhyChooseArticle>
        <S.WhyChooseArticle style={{ marginTop: 80 }}>
          <S.DescriptionContainer>
            <h3>Empresas</h3>
            <p>{forBusinessesDescription}</p>
            <S.StaticsWrapper>
              {forBusinessesStatistics.map((statistic) => (
                <li key={statistic.id}>
                  <span>{statistic.value}</span>
                  <p>{statistic.name}</p>
                </li>
              ))}
            </S.StaticsWrapper>
          </S.DescriptionContainer>
          <S.Cards className="position-right">
            {forBusinessesCards.map((card) => (
              <S.Card key={card.id}>
                <img src={card.icon} alt="" aria-hidden />
                <p>{card.name}</p>
              </S.Card>
            ))}
          </S.Cards>
        </S.WhyChooseArticle>
      </>
    </SectionContainer>
  )
}

export default WhyChoose
