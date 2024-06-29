import { useEffect, useState } from 'react'

import themes from '../../../styles/themes'
import * as S from './styles'

import Button from '../../atoms/Button'
import HamburgerButton from '../../atoms/HamburgerButton'
import Slogan from '../../molecules/Slogan'
import Nav from '../Nav'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
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
  const animate = scrolled ? 'solid' : 'blur'

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > parseInt(themes.breakpoints.lg))
    }
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    // Adiciona o event listener para o resize
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    // Remove o event listener ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {isDesktop ? (
        <S.FloatingHeader className="container">
          <Slogan />
          <Nav type="floating" />
          <S.AccessButtons>
            <Button
              buttonText="Cadastre-se"
              type="primary"
              className="is--deactivated pd-btn"
            />
            <Button buttonText="Login" type="primary" />
          </S.AccessButtons>
        </S.FloatingHeader>
      ) : (
        <S.Header variants={variants} animate={animate}>
          <S.HeaderContainer className="container">
            <Slogan />
            {/* <S.AccessButtons>
              <Button
                buttonText="Cadastre-se"
                type="primary"
                className="is--deactivated register-btn"
              />
              <Button buttonText="Login" type="primary" />
            </S.AccessButtons> */}
            <HamburgerButton
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </S.HeaderContainer>
        </S.Header>
      )}
    </>
  )
}

export default Header
