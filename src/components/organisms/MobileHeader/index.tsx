import { useEffect, useState } from 'react'

import * as S from './styles'

import HamburgerButton from '../../atoms/HamburgerButton'
import AccessButtons from '../../molecules/AccessButtons'
import Slogan from '../../molecules/Slogan'
import Nav from '../Nav'

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onClickButton = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('hidden-overflow')
    } else {
      document.body.classList.remove('hidden-overflow')
    }

    return () => {
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

  const animate = isOpen ? 'open' : 'closed'

  return (
    <>
      <S.MobileHeader initial="closed" animate={animate}>
        <S.HeaderContainer className="container">
          <Slogan />
          <HamburgerButton isOpen={isOpen} onClick={onClickButton} />
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
