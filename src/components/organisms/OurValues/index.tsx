import * as S from './styles'

import SectionContainer from '../../templates/SectionContainer'

type Props = {
  ourValuesData: Careers['our_values']
}

const OurValues = ({ ourValuesData }: Props) => {
  return (
    <SectionContainer
      titleSection={{ title: 'Nossos', markText: ' Princípios' }}
      descriptionSection={ourValuesData.description}
    >
      <S.ValuesList>
        {ourValuesData.cards.map((card) => (
          <S.Cards key={card.id}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </S.Cards>
        ))}
      </S.ValuesList>
    </SectionContainer>
  )
}

export default OurValues
