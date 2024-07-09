import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import themes from '../../../styles/themes'
import * as S from './styles'

import Button from '../../atoms/Button'
import HamburgerButton from '../../atoms/HamburgerButton'
import Slogan from '../../molecules/Slogan'
import Nav from '../Nav'

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('hidden-overflow')
    } else {
      document.body.classList.remove('hidden-overflow')
    }
  }, [isOpen])

  const wrapperVariant = {
    open: {
      y: '0'
    },
    closed: {
      y: '-100%'
    }
  }

  const buttonsVariant = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.7,
        duration: 0.3
      }
    },
    closed: {
      opacity: 0,
      y: -100
    }
  }

  const animate = isOpen ? 'open' : 'closed'

  return (
    <>
      <S.MobileHeader initial="closed" animate={animate}>
        <S.HeaderContainer className="container">
          <Slogan />
          <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </S.HeaderContainer>
        <S.NavWrapper
          variants={wrapperVariant}
          transition={{
            type: 'easeInOut',
            duration: 0.5
          }}
        >
          <Nav type="mobile" />
          <S.AccessButtons variants={buttonsVariant}>
            <Button
              buttonText="Cadastre-se"
              type="primary"
              className="is--deactivated"
            />
            <Button buttonText="Login" type="primary" />
          </S.AccessButtons>
        </S.NavWrapper>
      </S.MobileHeader>
    </>
  )
}

export default MobileHeader
