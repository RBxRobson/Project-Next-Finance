import { useEffect, useState } from 'react'

import themes from '../../../styles/themes'
import * as S from './styles'

import Button from '../../atoms/Button'
import HamburgerButton from '../../atoms/HamburgerButton'
import Slogan from '../../molecules/Slogan'
import Nav from '../Nav'

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const variants = {
    solid: {
      backgroundColor: 'rgba(25, 25, 25, 1)',
      boxShadow: `0 8px 10px ${themes.colors.darkShades.d_10}`
    },
    blur: {
      backgroundColor: 'rgba(25, 25, 25, 0)',
      boxShadow: `none`
    }
  }
  const animate = scrolled || isOpen ? 'solid' : 'blur'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    // Adiciona o event listener
    window.addEventListener('scroll', handleScroll)

    // Remove o event listener ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <S.MobileHeader variants={variants} animate={animate}>
      <S.Container className="container">
        {!isOpen ? (
          <Slogan />
        ) : (
          <S.AccessButtons>
            <Button
              buttonText="Cadastre-se"
              type="primary"
              className="is--deactivated register-btn"
            />
            <Button buttonText="Login" type="primary" />
          </S.AccessButtons>
        )}
        <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </S.Container>
      {isOpen && <Nav type="mobile" />}
    </S.MobileHeader>
  )
}

export default MobileHeader
