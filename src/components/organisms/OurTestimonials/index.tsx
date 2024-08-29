import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import theme from '../../../styles/themes'
import * as S from './styles'

import { testimonyHeader } from '../../../assets/images'
import TabSelector from '../../molecules/TabSelector'
import SectionContainer from '../../templates/SectionContainer'

type Props = {
  ourTestimonialsData: Home['our_testimonials']
}

type StateTestimony = {
  state: 'forPeople' | 'forBusinesses'
}

const OurTestimonials = ({ ourTestimonialsData }: Props) => {
  const {
    for_businesses: testimonialsForBusinesses,
    for_people: testimonialsForPeople
  } = ourTestimonialsData

  const { xl, md } = theme.breakpoints
  const desktop = parseInt(xl, 10)
  const tablet = parseInt(md, 10)

  const [position, setPosition] = useState('left')
  const [testimonials, setTestimonials] = useState(testimonialsForPeople)

  const setStateTestimony = (stateTestimony: StateTestimony) => {
    if (stateTestimony.state === 'forPeople') {
      setPosition('left')
      setTestimonials(testimonialsForPeople)
    } else if (stateTestimony.state === 'forBusinesses') {
      setPosition('right')
      setTestimonials(testimonialsForBusinesses)
    }
  }

  return (
    <SectionContainer
      titleSection={{ title: 'Nossos ', markText: 'Depoimentos' }}
      descriptionSection={ourTestimonialsData.description}
      tabSelector={
        <TabSelector
          position={position}
          firstBtn={{
            name: 'Pessoa Física',
            onClick: () => {
              setStateTestimony({ state: 'forPeople' })
            }
          }}
          secondBtn={{
            name: 'Empresa',
            onClick: () => {
              setStateTestimony({ state: 'forBusinesses' })
            }
          }}
        />
      }
    >
      <S.Carousel>
        <Swiper
          slidesPerView={1}
          navigation
          pagination
          breakpoints={{
            [tablet]: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            [desktop]: {
              slidesPerView: 3,
              spaceBetween: 40
            }
          }}
        >
          {testimonials.map((testimony) => (
            <SwiperSlide key={testimony.id}>
              <AnimatePresence mode="wait">
                <S.Testimony
                  key={position}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.8
                  }}
                >
                  <img src={testimonyHeader} alt="Imagem de aspas dupla" />
                  <p>{testimony.testimony}</p>
                  <h3>{testimony.name}</h3>
                </S.Testimony>
              </AnimatePresence>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.Carousel>
    </SectionContainer>
  )
}

export default OurTestimonials
