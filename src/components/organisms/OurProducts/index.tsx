import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

import * as S from './styles'

import TabSelector from '../../molecules/TabSelector'
import SectionContainer from '../../templates/SectionContainer'

type Props = {
  ourProductsData: Home['our_products']
}

const OurProducts = ({ ourProductsData }: Props) => {
  const productsForPeople = ourProductsData.for_people
  const productsForBusinesses = ourProductsData.for_businesses

  const [position, setPosition] = useState('left')
  const products =
    position === 'left' ? productsForPeople : productsForBusinesses

  return (
    <SectionContainer
      titleSection={{ title: 'Nossos ', markText: 'Produtos' }}
      descriptionSection={ourProductsData.description}
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
      <AnimatePresence mode="wait">
        <S.List
          key={position}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          {products.map((product) => (
            <S.ListItem key={product.id}>
              <img src={product.icon} alt="" aria-hidden />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </S.ListItem>
          ))}
        </S.List>
      </AnimatePresence>
    </SectionContainer>
  )
}

export default OurProducts
