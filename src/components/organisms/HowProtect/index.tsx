import { CardTitle } from '../OurBenefits/styles'
import * as S from './styles'

import SectionContainer from '../../templates/SectionContainer'

type Props = {
  howProtectData: Security['how_we_protect']
}
const HowProtect = ({ howProtectData }: Props) => {
  return (
    <SectionContainer
      titleSection={{
        title: 'Como protegemos ',
        markText: 'você'
      }}
      descriptionSection={howProtectData.description}
    >
      <S.CardsList>
        <S.BackgroundBox />
        {howProtectData.cards.map((card) => (
          <S.Card key={card.id}>
            <CardTitle>
              <img src={card.icon} alt="" aria-hidden />
              <h3>{card.title}</h3>
            </CardTitle>
            <p>{card.description}</p>
          </S.Card>
        ))}
      </S.CardsList>
    </SectionContainer>
  )
}

export default HowProtect
