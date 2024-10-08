import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import theme from '../../../styles/themes'
import * as S from './styles'

import SectionContainer from '../../templates/SectionContainer'

type Props = {
  faqData: Home['FAQ']
}

const FAQ = ({ faqData }: Props) => {
  const [expanded, setExpanded] = useState<false | number>(false)

  return (
    <SectionContainer
      titleSection={{ title: 'Perguntas ', markText: 'Frequentes' }}
      descriptionSection={faqData.description}
    >
      <>
        <S.CardsGrid>
          {faqData.cards.map((card, i) => {
            const isOpen = i === expanded
            return (
              <S.CardFAQ
                key={card.id}
                onClick={() => setExpanded(isOpen ? false : i)}
                variants={{
                  open: {
                    border: `1px solid ${theme.colors.darkShades.d_15}`
                  },
                  closed: {
                    border: `1px solid ${theme.colors.darkShades.d_70}`
                  }
                }}
                animate={isOpen ? 'closed' : 'open'}
              >
                <S.CardHeader>
                  <h3>{card.title}</h3>
                  <S.IconX
                    viewBox="0 0 24 24"
                    transition={{
                      type: 'spring',
                      damping: 20,
                      stiffness: 150
                    }}
                    variants={{
                      open: { transform: 'rotate(134deg)' },
                      closed: { transform: 'rotate(360deg)' }
                    }}
                    animate={isOpen ? 'closed' : 'open'}
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </S.IconX>
                </S.CardHeader>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.p
                      transition={{
                        type: 'tween'
                      }}
                      variants={{
                        open: { opacity: 1, height: 'auto', marginTop: 40 },
                        closed: { opacity: 0, height: 0, marginTop: 0 }
                      }}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      {card.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </S.CardFAQ>
            )
          })}
        </S.CardsGrid>
      </>
    </SectionContainer>
  )
}

export default FAQ
