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
        <S.WhyChooseArticle>
          <S.Cards>
            <img src={radialDesignRight} className="position_left" />
            {forPeopleCards.map((card) => (
              <S.Card key={card.id}>
                <img src={card.icon} alt="Ícone da estrutura de uma casa" />
                <p>{card.name}</p>
              </S.Card>
            ))}
          </S.Cards>
          <S.DescriptionContainer>
            <h4>Para Pessoas</h4>
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
        <S.WhyChooseArticle>
          <S.DescriptionContainer>
            <h4>Para empresas</h4>
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
          <S.Cards>
            <img src={radialDesignLeft} className="position_right" />
            {forBusinessesCards.map((card) => (
              <S.Card key={card.id}>
                <img src={card.icon} />
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
