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
      <>
        <AnimatePresence mode="wait">
          {position === 'left' && (
            <S.List
              key="left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              {productsForPeople.map((product) => (
                <S.ListItem key={product.id}>
                  <img src={product.icon} />
                  <h4>{product.title}</h4>
                  <p>{product.description}</p>
                </S.ListItem>
              ))}
            </S.List>
          )}
          {position === 'right' && (
            <S.List
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              {productsForBusinesses.map((product) => (
                <S.ListItem key={product.id}>
                  <img src={product.icon} />
                  <h4>{product.title}</h4>
                  <p>{product.description}</p>
                </S.ListItem>
              ))}
            </S.List>
          )}
        </AnimatePresence>
      </>
    </SectionContainer>
  )
}

export default OurProducts
