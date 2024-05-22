import * as S from './styles'

import abstractLeft from '../../assets/images/design_radius_lf.svg'
import abstractRight from '../../assets/images/design_radius_right.svg'

type Props = {
  home: Home
}

const UseCases = ({ home }: Props) => {
  const useCasesInfos = home.why_choose
  const {
    description: forPeopleDescription,
    statistics: forPeopleStatistics,
    cards: forPeopleCards
  } = useCasesInfos.for_people
  const {
    description: forBusinessesDescription,
    statistics: forBusinessesStatistics,
    cards: forBusinessesCards
  } = useCasesInfos.for_businesses

  return (
    <S.UseCaseSection className="container">
      <h2>
        Porque escolher o <span className="green-span">Next Finance</span>
      </h2>
      <p>{useCasesInfos.description}</p>
      <S.UseCaseArticle>
        <S.CardsWrapper>
          <img src={abstractRight} className="position_left" />
          {forPeopleCards.map((card) => (
            <S.Card key={card.id}>
              <img src={card.icon} alt="Ícone da estrutura de uma casa" />
              <p>{card.name}</p>
            </S.Card>
          ))}
        </S.CardsWrapper>
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
      </S.UseCaseArticle>
      <S.UseCaseArticle>
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
        <S.CardsWrapper>
          <img src={abstractLeft} className="position_right" />
          {forBusinessesCards.map((card) => (
            <S.Card key={card.id}>
              <img src={card.icon} />
              <p>{card.name}</p>
            </S.Card>
          ))}
        </S.CardsWrapper>
      </S.UseCaseArticle>
    </S.UseCaseSection>
  )
}

export default UseCases
