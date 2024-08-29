import * as S from './styles'

import SectionContainer from '../../templates/SectionContainer'

type Props = {
  benefitsData: Careers['our_benefits']
}

const OurBenefits = ({ benefitsData }: Props) => {
  return (
    <SectionContainer
      titleSection={{ title: 'Nossos ', markText: 'Benefícios' }}
      descriptionSection={benefitsData.description}
    >
      <S.BenefitsCards>
        {benefitsData.cards.map((card) => (
          <S.CardContainer key={card.id}>
            <S.Card>
              <S.CardTitle>
                <img src={card.icon} alt="" aria-hidden />
                <h3>{card.title}</h3>
              </S.CardTitle>
              <p>{card.description}</p>
            </S.Card>
          </S.CardContainer>
        ))}
      </S.BenefitsCards>
    </SectionContainer>
  )
}

export default OurBenefits
