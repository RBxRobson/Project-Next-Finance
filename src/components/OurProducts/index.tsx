import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import * as S from './styles'

import TabSelector from '../../components/TabSelector'

type Props = {
  home: Home
}

const OurProducts = ({ home }: Props) => {
  const ourProductsInfos = home.our_products
  const productsForPeople = ourProductsInfos.for_people
  const productsForBusinesses = ourProductsInfos.for_businesses

  const [position, setPosition] = useState('left')

  return (
    <S.SectionContent className="container">
      <S.HeaderSection>
        <h2>
          Nossos <span className="green-span">Produtos</span>
        </h2>
        <div>
          <p>{ourProductsInfos.description}</p>
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
        </div>
      </S.HeaderSection>
      <AnimatePresence mode="wait">
        {position === 'left' && (
          <S.ArticleWrapper
            key="left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            {productsForPeople.map((product) => (
              <S.Article key={product.id}>
                <img src={product.icon} />
                <h4>{product.title}</h4>
                <p>{product.description}</p>
              </S.Article>
            ))}
          </S.ArticleWrapper>
        )}
        {position === 'right' && (
          <S.ArticleWrapper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            {productsForBusinesses.map((product) => (
              <S.Article key={product.id}>
                <img src={product.icon} />
                <h4>{product.title}</h4>
                <p>{product.description}</p>
              </S.Article>
            ))}
          </S.ArticleWrapper>
        )}
      </AnimatePresence>
    </S.SectionContent>
  )
}

export default OurProducts
