import { useState } from 'react'

import { testimonyHeader, iconLeft, iconRight } from '../../../assets/images'
import TabSelector from '../../molecules/TabSelector'
import SectionContainer from '../../templates/SectionContainer'
import * as S from './style'

type Props = {
  ourTestimonialsData: Home['our_testimonials']
}

const OurTestimonials = ({ ourTestimonialsData }: Props) => {
  const testimonialsForPeople = ourTestimonialsData.for_people
  const testimonialsForBusinesses = ourTestimonialsData.for_businesses

  const [position, setPosition] = useState('left')
  const testimonials =
    position === 'left' ? testimonialsForPeople : testimonialsForBusinesses

  return (
    <SectionContainer
      titleSection={{ title: 'Nossos ', markText: 'Depoimentos' }}
      descriptionSection={ourTestimonialsData.description}
      tabSelector={
        <TabSelector
          position={position}
          firstBtn={{
            name: 'Pessoa Física',
            onClick: () => setPosition('left')
          }}
          secondBtn={{
            name: 'Empresa',
            onClick: () => setPosition('right')
          }}
        />
      }
    >
      <S.CarouselWrapper>
        <S.CarouselButton>
          <img src={iconLeft} alt="" />
        </S.CarouselButton>
        <S.List>
          {testimonials.map((testimony) => (
            <S.Item key={testimony.id}>
              <img src={testimonyHeader} />
              <p>{testimony.testimony}</p>
              <h4>{testimony.name}</h4>
            </S.Item>
          ))}
        </S.List>
        <S.CarouselButton>
          <img src={iconRight} alt="" />
        </S.CarouselButton>
      </S.CarouselWrapper>
    </SectionContainer>
  )
}

export default OurTestimonials
