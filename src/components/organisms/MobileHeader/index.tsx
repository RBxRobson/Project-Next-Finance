import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import * as S from './styles'

import { RootReducer } from '../../../redux'
import HamburgerButton from '../../atoms/HamburgerButton'
import AccessButtons from '../../molecules/AccessButtons'
import Slogan from '../../molecules/Slogan'
import Nav from '../Nav'

const MobileHeader = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.navMobile)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
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

  const animate = isOpen ? 'open' : 'closed'

  return (
    <>
      <S.MobileHeader initial="closed" animate={animate}>
        <S.HeaderContainer className="container">
          <Slogan />
          <HamburgerButton />
        </S.HeaderContainer>
        <S.NavWrapper
          variants={wrapperVariant}
          transition={{
            type: 'easeInOut',
            duration: 0.5
          }}
        >
          <Nav type="mobile" />
          <AccessButtons />
        </S.NavWrapper>
      </S.MobileHeader>
    </>
  )
}

export default MobileHeader
