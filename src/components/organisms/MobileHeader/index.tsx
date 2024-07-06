import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

import themes from '../../../styles/themes'
import * as S from './styles'

import Button from '../../atoms/Button'
import HamburgerButton from '../../atoms/HamburgerButton'
import Slogan from '../../molecules/Slogan'
import Nav from '../Nav'

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false)

  const variants = {
    open: {
      backgroundColor: themes.colors.darkShades.d_10,
      height: '100%'
    },
    closed: {
      backgroundColor: 'rgba(25, 25, 25, 0)',
      height: 'auto'
    }
  }
  const animate = isOpen ? 'open' : 'closed'

  return (
    <>
      <S.HeaderSpacing />
      <S.MobileHeader variants={variants} animate={animate}>
        <S.Container className="container">
          <Slogan />
          <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </S.Container>
        <AnimatePresence>
          {isOpen && (
            <>
              <Nav type="mobile" isOpen={isOpen} />
              <S.AccessButtons>
                <Button
                  buttonText="Cadastre-se"
                  type="primary"
                  className="is--deactivated"
                />
                <Button buttonText="Login" type="primary" />
              </S.AccessButtons>
            </>
          )}
        </AnimatePresence>
      </S.MobileHeader>
    </>
  )
}

export default MobileHeader
