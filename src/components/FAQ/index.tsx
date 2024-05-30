import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import * as S from './styles'

type Props = {
  home: Home
}

const FAQ = ({ home }: Props) => {
  const { cards } = home.FAQ
  const [expanded, setExpanded] = useState<false | number>(false)

  return (
    <section className="container">
      <S.HeaderFAQ>
        <h2>
          Perguntas <span className="green-span">Frequentes</span>
        </h2>
        <p>
          Você tem uma dúvida que não foi resolvida? Entre em contato com o
          suporte pelo email: <a href="#">nextfinance@exemplo.com</a>
        </p>
      </S.HeaderFAQ>
      <S.CardsGrid>
        {cards.map((card, i) => {
          const isOpen = i === expanded
          return (
            <S.CardFAQ
              key={card.id}
              onClick={() => setExpanded(isOpen ? false : i)}
              variants={{
                open: {
                  filter: 'brightness(1)'
                },
                closed: {
                  filter: 'brightness(2)'
                }
              }}
              animate={isOpen ? 'closed' : 'open'}
            >
              <S.CardHeader>
                <h4>{card.title}</h4>
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
                      open: { opacity: 1, height: 'auto', marginTop: 20 },
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
    </section>
  )
}

export default FAQ
