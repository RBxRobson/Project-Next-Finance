import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import * as S from './style'

type ButtonProps = {
  buttonText: string
  type: 'btn_green' | 'btn_green--lg' | 'link_green'
  className?: 'btn__register' | 'btn--disabled' | ''
  onClick?: () => void
  link?: string
}

const Button = ({
  buttonText,
  type,
  className,
  onClick,
  link
}: ButtonProps) => {
  const MotionLink = motion(Link)

  const attrButton = {
    className,
    whileTap: { scale: 1.1 },
    whileHover: { filter: 'brightness(0.9)' },
    onClick
  }

  if (type === 'link_green' && link) {
    return (
      <S.BtnGreen as={MotionLink} to={link} {...attrButton}>
        {buttonText}
      </S.BtnGreen>
    )
  } else if (type === 'btn_green--lg') {
    return (
      <S.BtnGreenLarge as={motion.button} {...attrButton}>
        {buttonText}
      </S.BtnGreenLarge>
    )
  } else if (type === 'btn_green') {
    return (
      <S.BtnGreen as={motion.button} {...attrButton}>
        {buttonText}
      </S.BtnGreen>
    )
  }
}

export default Button
