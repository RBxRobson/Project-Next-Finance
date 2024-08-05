import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

import { RootReducer } from '../../../redux'
import { setIsOpen } from '../../../redux/reducers/navMobile'

const HamburgerButton = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.navMobile)
  const dispatch = useDispatch()

  const onClickButton = () => {
    dispatch(setIsOpen())
  }

  const variant = isOpen ? 'opened' : 'closed'
  const boxSize = 24

  const top = {
    closed: {
      rotate: 0,
      translateY: 0
    },
    opened: {
      rotate: 204,
      translateY: 3,
      scale: 0.7
    }
  }

  const center = {
    closed: {
      scale: 1,
      rotate: 0,
      translateY: 0
    },
    opened: {
      scale: 0
    }
  }

  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0
    },
    opened: {
      rotate: -204,
      translateY: -3,
      scale: 0.7
    }
  }

  const lineProps = {
    vectorEffect: 'non-scaling-stroke',
    initial: 'closed',
    animate: variant,
    transition: { type: 'spring', damping: 16 }
  }

  return (
    <S.BtnHamburger
      whileTap={{ scale: 1.1 }}
      whileHover={{ filter: 'brightness(0.9)' }}
      onClick={onClickButton}
    >
      <S.Svg viewBox={`0 0 ${boxSize} 10`} preserveAspectRatio="none">
        <motion.line x2="100%" y1="2" y2="2" variants={top} {...lineProps} />
        <motion.line x2="100%" y1="5" y2="5" variants={center} {...lineProps} />
        <motion.line x2="100%" y1="8" y2="8" variants={bottom} {...lineProps} />
      </S.Svg>
    </S.BtnHamburger>
  )
}

export default HamburgerButton
