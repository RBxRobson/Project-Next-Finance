import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import * as S from './styles'

import TabSelector from '../../components/TabSelector'

type TabType = 'CPF' | 'CNPJ'
type Props = {
  home: Home
}

const OurProducts = ({ home }: Props) => {
  const ourProductsInfos = home.our_products
  const productsForPeople = ourProductsInfos.for_people
  const productsForBusinesses = ourProductsInfos.for_businesses

  const [tab, setTab] = useState<TabType>('CPF')

  return (
    <S.SectionContent className="container">
      <S.HeaderSection>
        <h2>
          Nossos <span className="green-span">Produtos</span>
        </h2>
        <div>
          <p>{ourProductsInfos.description}</p>
          <TabSelector>
            <>
              <button
                className={
                  tab === 'CPF' ? 'green-button' : 'green-button--disabled'
                }
                onClick={() => setTab('CPF')}
              >
                Pessoas Físicas
              </button>
              <button
                className={
                  tab === 'CNPJ' ? 'green-button' : 'green-button--disabled'
                }
                onClick={() => setTab('CNPJ')}
              >
                Empresas
              </button>
            </>
          </TabSelector>
        </div>
      </S.HeaderSection>
      <AnimatePresence mode="wait">
        {tab === 'CPF' && (
          <S.ArticleWrapper
            key="CPF"
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
        {tab === 'CNPJ' && (
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
