import { AnimatePresence } from 'framer-motion'
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
  const [carouselIndex, setCarouselIndex] = useState(0)

  const testimonials =
    position === 'left' ? testimonialsForPeople : testimonialsForBusinesses

  const handleScrollLeft = () => {
    setCarouselIndex((prevIndex) => prevIndex - 1)
  }

  const handleScrollRight = () => {
    setCarouselIndex((prevIndex) => prevIndex + 1)
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
              setPosition('left')
              setCarouselIndex(0)
            }
          }}
          secondBtn={{
            name: 'Empresa',
            onClick: () => {
              setPosition('right')
              setCarouselIndex(0)
            }
          }}
        />
      }
    >
      <S.Carousel>
        <S.CarouselButton
          whileTap={{ scale: 1.2 }}
          onClick={handleScrollLeft}
          disabled={carouselIndex === 0}
        >
          <img src={iconLeft} alt="Voltar" />
        </S.CarouselButton>
        <S.CarouselWrapper>
          <S.List
            animate={{ x: carouselIndex * -480 }}
            transition={{ type: 'just' }}
          >
            <AnimatePresence>
              {testimonials.map((testimony) => (
                <S.ListItem
                  key={testimony.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <img src={testimonyHeader} />
                  <p>{testimony.testimony}</p>
                  <h4>{testimony.name}</h4>
                </S.ListItem>
              ))}
            </AnimatePresence>
          </S.List>
        </S.CarouselWrapper>
        <S.CarouselButton
          whileTap={{ scale: 1.2 }}
          onClick={handleScrollRight}
          disabled={carouselIndex === testimonials.length - 3}
        >
          <img src={iconRight} alt="Avançar" />
        </S.CarouselButton>
      </S.Carousel>
    </SectionContainer>
  )
}

export default OurTestimonials
